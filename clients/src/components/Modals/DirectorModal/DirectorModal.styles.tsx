import styled from "styled-components";

export const DirectorMainBase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const DirectorSettingHeader = styled.div`
  width: 100%;
  display: grid;
  margin: 5px;
  grid-template-columns: 0.2fr 0.4fr 0.4fr;
  border-bottom: 1px solid #D41E1E;
  & span {
    text-align: center;
    padding: 5px;
    color: #f5f5f5;
  }
`

export const DirectorSettingGrid = styled.div`
  display: grid;
  margin: 5px;
  grid-template-columns: 0.2fr 0.4fr 0.4fr;
  border-bottom: 1px solid #008CBA;
  justify-content: center;
  grid-column-gap: 25px;
`