import React, { useState } from 'react';

import logo from '../../image/Logo.jpg';
import downArrow from '../../image/arrow-down.jpg';
import heart from '../../image/heart.jpg';
import profile from '../../image/profile.jpg';
import search from '../../image/search-normal.jpg';
import shoppingBag from '../../image/shopping-bag.jpg';
import hamburgerIcon from '../../image/hamburger-menu.jpg';

import {
  NavbarCom,
  SmallDeviceNav,
  LargeDeviceNav,
  NavTopSec,
  LogoImg,
  LogoText,
  LogoRightSec,
  NavIcon,
  LangaugeContainer,
  LangaugeText,
  DownArrow,
  Menubutton,
  NavbottomSec,
  Navlist,
  NavItem,
  MenuAndLogo,
  HamburgerMenu,
  Horizontal,
  SmallDeviceMenuContainer,
  SmallListItem,
  SmallItem,
} from '../StyledComponents/StyledCSS';

const Navbar = () => {
  const [isMenuSm, setisMenuSm] = useState(false);

  return (  
    <NavbarCom>

      <SmallDeviceNav>
        <MenuAndLogo>
          <Menubutton type="button" onClick={() => setisMenuSm(!isMenuSm)}>
            <HamburgerMenu src={hamburgerIcon} alt="hamburger-menu" />
          </Menubutton>
          <LogoImg src={logo} alt="logo" />
        </MenuAndLogo>
        <LogoText>LOGO</LogoText>
        <LogoRightSec>
          <NavIcon src={search} alt="search" />
          <NavIcon src={heart} alt="heart" />
          <NavIcon src={shoppingBag} alt="shoppingBag" />
        </LogoRightSec>

      </SmallDeviceNav>

      <SmallDeviceMenuContainer $MenuSm={isMenuSm}>
        <SmallListItem>
          <SmallItem>SHOP</SmallItem>
          <SmallItem>SKILLS</SmallItem>
          <SmallItem>STORIES</SmallItem>
          <SmallItem>ABOUT</SmallItem>
          <SmallItem>CONTACT US</SmallItem>
        </SmallListItem>
      </SmallDeviceMenuContainer>

      <LargeDeviceNav>
        <NavTopSec>
          <LogoImg src={logo} alt="logo" />
          <LogoText>LOGO</LogoText>
          <LogoRightSec>
            <NavIcon src={search} alt="search" />
            <NavIcon src={heart} alt="heart" />
            <NavIcon src={shoppingBag} alt="shoppingBag" />
            <NavIcon src={profile} alt="profile" />
            <LangaugeContainer>
              <LangaugeText>ENG</LangaugeText>
              <DownArrow src={downArrow} alt='dowmArrow'/>
            </LangaugeContainer> 
          </LogoRightSec>
        </NavTopSec>

        <NavbottomSec>
          <Navlist>
            <NavItem>SHOP</NavItem>
            <NavItem>SKILLS</NavItem>
            <NavItem>STORIES</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>CONTACT US</NavItem>
          </Navlist>
        </NavbottomSec>

      </LargeDeviceNav>
      <Horizontal />
    </NavbarCom>
  )
}

export default Navbar;