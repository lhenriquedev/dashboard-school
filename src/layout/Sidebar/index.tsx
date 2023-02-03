import { useLocation } from "react-router-dom";

import * as S from "./styles";
import { linksArr } from "../../data/links";
import {
  HiArrowRightOnRectangle,
  HiOutlineBars3BottomRight,
} from "react-icons/hi2";
import { useState } from "react";
import { useAuth } from "../../context/userContext";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { user, signOutUser } = useAuth();

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
            <S.SLink to={to}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {isSidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
            </S.SLink>
          </S.LinkContainer>
        );
      })}

      <S.Logout onClick={signOutUser}>
        <S.SLink to="/login">
          <S.LinkIcon>
            <HiArrowRightOnRectangle />
          </S.LinkIcon>
          {isSidebarOpen && <S.LinkLabel>Sair</S.LinkLabel>}
        </S.SLink>
      </S.Logout>
    </S.Sidebar>
  );
}
