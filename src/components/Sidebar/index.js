import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrap,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="work" isOpen={isOpen} onClick={toggle}>
            Work
          </SidebarLink>
          <SidebarLink to="contact" isOpen={isOpen} onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SidebarWrap>
          <SidebarRoute to="/" isOpen={isOpen} onClick={toggle}>
            Holla
          </SidebarRoute>
        </SidebarWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
