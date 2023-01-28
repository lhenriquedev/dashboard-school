import { useLocation } from "react-router-dom";

import * as S from "./styles";
import { linksArr } from "../../data/links";
import {
  HiArrowRightOnRectangle,
  HiOutlineBars3BottomRight,
} from "react-icons/hi2";
import { useState } from "react";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { pathname } = useLocation();

  return (
    <S.Sidebar isOpen={isSidebarOpen}>
      <S.SidebarHeader
        style={
          !isSidebarOpen
            ? { justifyContent: "center", alignItems: "center" }
            : { justifyContent: "space-between" }
        }
      >
        {isSidebarOpen && <S.SidebarLogo>KazamaDash</S.SidebarLogo>}
        <S.SidebarButton onClick={() => setIsSidebarOpen((state) => !state)}>
          <HiOutlineBars3BottomRight size={32} />
        </S.SidebarButton>
      </S.SidebarHeader>

      {linksArr.map((link) => {
        const { icon, label, to } = link;
        return (
          <S.LinkContainer key={label} isActive={pathname === to}>
            <S.SLink to={to} style={!isSidebarOpen ? { padding: 0 } : {}}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {isSidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
            </S.SLink>
          </S.LinkContainer>
        );
      })}

      <S.Logout>
        <S.SLink to="/login" style={!isSidebarOpen ? { padding: 0 } : {}}>
          <S.LinkIcon>
            <HiArrowRightOnRectangle />
          </S.LinkIcon>
          {isSidebarOpen && <S.LinkLabel>Sair</S.LinkLabel>}
        </S.SLink>
      </S.Logout>
    </S.Sidebar>
  );
}
