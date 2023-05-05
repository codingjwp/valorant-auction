import { useJsonData } from "../hooks/useJsonData";

const JSONURL = '/src/jsonfile/quoteslist.json';

const QuoteMain = () => {

  const [ jsonData ] = useJsonData(JSONURL, 'english');

  return (
    <div></div>
  )
}

export default QuoteMain;