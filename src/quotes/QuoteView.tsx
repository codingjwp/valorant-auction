import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useJsonData } from "../hooks/useJsonData";
import {ReactComponent as Replay} from '../assets/svgs/replay.svg'

const QuoteMain = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuoteMainSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: calc(50% - 30px);
  padding: 20px 30px;
  min-width: 500px;
  height: 300px;
  background: linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);
  border-radius: 20px;
  & > h2 {
    font-family: 'ABeeZee', sans-serif;
    margin-bottom: 30px;
    font-size: 1.8rem;
    color: #fafafa;
  }
  & > span > a {
    color: #fafafa;
    font-size: 1.15rem;
    font-style: italic;
    cursor: pointer;
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const QuoteMainButtonContainer = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  bottom: 10px;
  right: 10px;
  border-radius: 50% 50%;
  box-shadow: 2px 1.5px 1.5px rgba(0, 0, 0, 0.2);
  &:hover {
    scale:  calc(1.2);
  }
`

const QuoteMainButton = styled(Replay)`
  width: 35px;
  height: 35px;
  fill: #fafafa;
  &:hover {
    cursor: pointer;
    animation: ${rotate} 2s linear infinite;
  }
`;

const QuoteView = ({changeLang}: {changeLang: string}) => {
  const JSONURL = '/src/jsonfiles/quoteslist.json';
  const [ jsonData ] = useJsonData(JSONURL, changeLang);
  const [ randomIndex, setRandomInex ] = useState(Math.floor(Math.random() * 20))

  const handleChangeIndexClick = () => {
    setRandomInex(Math.floor(Math.random() * 20));
  }

  return (
    <QuoteMain>
      <QuoteMainSection>
        {jsonData && <h2>{jsonData[randomIndex].quote}</h2>}
        {jsonData &&
          <span>
            <Link to={jsonData[randomIndex].personLink} title={jsonData[randomIndex].person} target="_blank">{`- ${jsonData[randomIndex].person} -`}</Link>
          </span>}
          <QuoteMainButtonContainer>
            <QuoteMainButton onClick={handleChangeIndexClick} />
          </QuoteMainButtonContainer>
      </QuoteMainSection>
    </QuoteMain>
  )
}

export default QuoteView;