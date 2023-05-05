
import { useState } from "react";
import FixHeader from "../components/FixHeader";
import QuoteView from "./QuoteView";

const QuoteMain = () => {
  const NAVDATA = [
    { id: 1, naming: "English", payload: "english"},
    { id: 2, naming: "한국어", payload: "korean" }
  ]
  const [changeLang, setChangeLang] = useState('english');
  const handleItemClick = (payload: string) => {
    setChangeLang(payload);
    console.log(payload);
  }

  return (
    <>
      <FixHeader navPosition="right" navData={NAVDATA} onItemClick={handleItemClick} />
      <QuoteView changeLang={changeLang} />
    </>
  )
}

export default QuoteMain;