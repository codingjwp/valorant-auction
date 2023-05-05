import { useState } from "react";
import { useJsonData } from "../hooks/useJsonData";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  height: 300px;
  background-color: green;
  & > h2 {
    margin-bottom: 30px;
    font-size: 1.8rem;
  }
  & > span > a {
    color: white;
  }
`;

const QuoteMainButton = styled.button.attrs(({
  type: 'button',
}))`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 30px;
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
            <Link to={jsonData[randomIndex].personLink} target="_blank">{jsonData[randomIndex].person}</Link>
          </span>}
          <QuoteMainButton onClick={handleChangeIndexClick}>Change</QuoteMainButton>
      </QuoteMainSection>
    </QuoteMain>
  )
}

export default QuoteView;