import { ReactNode, MouseEvent } from 'react';
import { DropDownBase, DropDownContainer, DropDownMenu} from './DropDown.styled'

interface MenuProps {
  idx: string,
  name: string,
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

interface DropDownProps{
  isOpen: boolean;
  children?: ReactNode;
  menus: MenuProps[];
}

export default function DropDown({isOpen, menus, children}: DropDownProps) {
  return (
    <DropDownBase>
      {children}
      <DropDownContainer open={isOpen}>
        {menus.map((menu) => {
          return (<DropDownMenu key={menu.idx} onClick={menu.onClick} >{menu.name}</DropDownMenu>);
        })}
      </DropDownContainer>
    </DropDownBase>
  )
};