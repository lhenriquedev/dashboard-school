import { useLocation } from "react-router-dom";

import * as S from "./styles";
import { linksArr } from "../../data/links";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <S.Sidebar>
      <S.Logo>KazamaDash</S.Logo>
      <nav>
        {linksArr.map((link) => {
          const { icon, label, to } = link;
          return (
            <S.LinkContainer key={label} isActive={pathname === to}>
              <S.SLink to={to}>
                <S.LinkIcon>{icon}</S.LinkIcon>
                <S.LinkLabel>{label}</S.LinkLabel>
              </S.SLink>
            </S.LinkContainer>
          );
        })}
      </nav>
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
