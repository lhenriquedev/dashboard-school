import { useLocation } from "react-router-dom";

import * as S from "./styles";
import { linksArr } from "../../data/links";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <S.Sidebar>
      <S.Logo>Dashboard</S.Logo>
      {linksArr.map((link) => {
        const { icon, label, to } = link;
        return (
          <S.LinkContainer isActive={pathname === to}>
            <S.SLink to={to}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              <S.LinkLabel>{label}</S.LinkLabel>
            </S.SLink>
          </S.LinkContainer>
        );
      })}
      <S.Logout>
        <S.SLink to="/login">
          <S.LinkIcon>
            <HiArrowRightOnRectangle />
          </S.LinkIcon>
          <S.LinkLabel>Sair</S.LinkLabel>
        </S.SLink>
      </S.Logout>
    </S.Sidebar>
  );
}
