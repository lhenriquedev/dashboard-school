import { NavLink } from "react-router-dom";
import styled from "styled-components";

type SidebarProps = {
  isActive?: boolean;
};

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 18.75rem;
  height: 100vh;
  padding: 1rem;
  background: ${(props) => props.theme["neutral-50"]};
  border-right: 1px solid ${(props) => props.theme["neutral-200"]};
`;

export const Logo = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme["neutral-700"]};
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
`;

export const LinkContainer = styled.li<SidebarProps>`
  list-style: none;
  text-align: center;
  border-radius: 6px;
  margin: 0.2rem 0;
`;

export const Logout = styled.div`
  margin-top: auto;
  border-radius: 6px;

  :hover {
    background-color: ${(props) => props.theme["neutral-700"]};
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  color: ${(props) => props.theme["neutral-700"]};
  font-size: 1rem;
  padding: 8px;

  border-radius: 6px;
  transition: 150ms ease;

  &.active,
  &:hover {
    background-color: ${(props) => props.theme["neutral-200"]};
  }
`;

export const LinkIcon = styled.div`
  padding: 8px 16px;
  display: flex;

  svg {
    font-size: 1.25rem;
  }
`;

export const LinkLabel = styled.span`
  margin-left: 0.5rem;
`;
