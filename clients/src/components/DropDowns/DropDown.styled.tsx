import styled from 'styled-components';

export const DropDownBase = styled.div`
  position: relative;
`

export const DropDownContainer = styled.ul<{open: boolean}>`
  position: absolute;
  border-radius: 2px;
  background-color: #323232;
  color: #f5f5f5;
  top: 100%;
  right: 0;
  transform: translateY(-15%);
  z-index: 101;
  display: ${props => props.open ? "block" : "none"};
`

export const DropDownMenu = styled.li`
  white-space: nowrap;
  border: 0.5px solid #D41E1E;
  padding: 10px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #D41E1E88;
    border: 0.9px solid #323232;
  }
`