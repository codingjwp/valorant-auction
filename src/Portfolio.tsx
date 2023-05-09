import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <Link to="quotes">명언 페이지</Link><br/>
      <Link to="wines">와인 페이지</Link>
    </>
  )
}

export default Portfolio;