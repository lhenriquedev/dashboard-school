import { Link } from "react-router-dom";
import styled from "styled-components";

type SidebarProps = {
  isActive?: boolean;
};

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;

  width: 15.625rem;
  height: 100vh;
  padding: 1rem;
  border-right: 1px solid #e5e7eb;
  background: #ffffff;
`;

export const Logo = styled.h2`
  font-size: 2rem;
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;
`;

export const LinkContainer = styled.div<SidebarProps>`
  background: ${({ isActive }) => (!isActive ? `transparent` : `#dcfce7;`)};
  text-align: center;
  border-radius: 8px;
  margin: 0.2rem 0;

  :hover {
    background: #dcfce7;
    color: #065f46;
    transition: background 200ms;
  }
`;

export const Logout = styled.div`
  margin-top: auto;
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  color: #6b7280;
  font-size: 1rem;
  padding: 8px;

  border-radius: 8px;
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
