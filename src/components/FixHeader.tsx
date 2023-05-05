import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderStyle, HeaderProps } from "../types/fixHeaderType";

/* 하얀 배경에 어울리는 파란색
  #5974BD
  #B7CFF7
  #2D334F
  #8D94C7
  #C7C0E0
  #F2E9D0
  신뢰감
  #142B42
  #1F4078
  #3F7AB5
*/

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #8D94C7;
`
const Nav = styled.nav<HeaderStyle>`
  display: flex;
  height: inherit;
  width: 100%;
  justify-content: ${(props) => props.navPosition === 'right' ? 'flex-end' : 'flex-start'};
`
const NavUl = styled.ul`
  display: flex;
  font-size: 1.1rem;
  height: inherit;
  color: #ffffff;
  align-items: center;
`
const NavLi = styled.li<HeaderStyle>`
  padding: ${(props) => props.navPosition === 'right' ? '0 10px 0 10px' : '0 10px 0 10px'};
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
  &:hover {
    display: flex;
    align-items: center;
    height: 60%;
    border-radius: 10px;
    background-color: red;
  }
`

const FixHeader = (props: HeaderProps) => {
  const handelItemClick = (payload: string) => {
    if (props.onItemClick) props.onItemClick(payload)
  }

  return (
    <Header>
      <Nav navPosition={props.navPosition}>
        <NavUl>
          {props.navData.map((items) => !items.linking ? 
            <NavLi navPosition={props.navPosition} key={items.id} onClick={() => handelItemClick(items.payload)}>{items.naming}</NavLi> 
            : <NavLi navPosition={props.navPosition} key={items.id}><Link to={items.linking}>{items.naming}</Link></NavLi> )}
        </NavUl>
      </Nav>
    </Header>
  )
}

export default FixHeader;