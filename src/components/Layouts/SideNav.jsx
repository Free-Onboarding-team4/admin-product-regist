import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'constants';
import { MENU } from 'constants';
import { SideNavList } from './SideNavList';
import { SUB_MENU } from 'constants';
export const SideNav = () => {
  return (
    <NavContainer>
      <LogoBox>BeefPlz</LogoBox>
      <MainMenu>
        {MENU.map((el, i) => (
          <SideNavList key={i} title={el} subMenu={SUB_MENU[i]['menus']} />
        ))}
      </MainMenu>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  width: 14vw;
  height: 100vh;
  left: 0;
  top: 0;
  border-right: 2px solid ${COLOR.BG_LIGHT};
`;

const LogoBox = styled.h1`
  width: 100%;
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  border-bottom: 2px solid ${COLOR.BG_LIGHT};
  color: ${COLOR.MAIN};
  font-size: 2rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
const MainMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 5em;
`;
