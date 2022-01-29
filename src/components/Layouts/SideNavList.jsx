import React, { useState } from 'react';
import styled from 'styled-components';
import { IoChevronDownOutline } from 'react-icons/io5';
import { COLOR } from 'constants';
export const SideNavList = ({ title, subMenu }) => {
  const [isActive, setIsActive] = useState();
  const handleClick = () => {
    setIsActive(el => !el);
  };
  let subMenuHeight = subMenu.length * 3;
  return (
    <>
      <List className={isActive ? 'active' : ''} onClick={handleClick}>
        <span>{title}</span> <IoChevronDownOutline />
      </List>
      <SubMenu className={isActive ? 'active' : ''} smh={subMenuHeight}>
        {subMenu &&
          subMenu.map((el, i) => (
            <li key={i}>
              <span>{el}</span>
            </li>
          ))}
      </SubMenu>
    </>
  );
};

const List = styled.li`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 3rem;
  line-height: 3rem;
  border-bottom: 2px solid ${COLOR.BG_LIGHT};
  font-weight: 500;
  cursor: pointer;
  &.active svg {
    transform: rotate(180deg);
  }
  span {
    margin-left: 1.5em;
  }
  svg {
    transition: all 0.3s ease-in-out;
    margin-right: 1rem;
  }
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.BG};
  max-height: 0;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &.active {
    max-height: ${props => `${props.smh}rem`};
  }
  li {
    border: none;
    min-height: 3rem;
    line-height: 3rem;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: ${COLOR.MAIN_LIGHT};
      color: ${COLOR.MAIN};
    }
    span {
      margin-left: 1.5em;
    }
  }
`;
