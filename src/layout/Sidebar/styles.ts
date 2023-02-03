import { NavLink } from "react-router-dom";
import styled from "styled-components";

type SidebarProps = {
  isActive?: boolean;
  isOpen?: boolean;
};

export const Sidebar = styled.aside<SidebarProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: ${({ isOpen }) => (isOpen ? `18.75rem` : `fit-content`)};
  height: 100vh;
  padding: 1rem;
  background: ${(props) => props.theme["neutral-50"]};
  border-right: 1px solid ${(props) => props.theme["neutral-200"]};
`;

export const SidebarHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SidebarButton = styled.button`
  border: none;
  background: none;
  transition: 200ms ease-in;
  cursor: pointer;

  &:hover {
    transform: rotate(-5deg);
  }
`;

export const SidebarLogo = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme["neutral-700"]};
`;

export const LinkContainer = styled.li<SidebarProps>`
  list-style: none;
  text-align: center;
  border-radius: 6px;
  margin: 0.2rem 0;
`;

export const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  color: ${(props) => props.theme["neutral-900"]};
  font-size: 1rem;

  border-radius: 6px;
  transition: 150ms ease;
  padding: 1rem;

  &.active,
  &:hover {
    background-color: ${(props) => props.theme["indigo-700"]};
    color: ${(props) => props.theme["neutral-100"]};
  }
`;

export const LinkIcon = styled.div`
  svg {
    font-size: 1.25rem;
  }
`;

export const LinkLabel = styled.span`
  margin-left: 0.5rem;
`;

export const Logout = styled.div`
  margin-top: auto;
  border-radius: 6px;

  :hover {
    background-color: ${(props) => props.theme["neutral-700"]};
  }
`;
