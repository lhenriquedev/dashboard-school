import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import * as S from "./styles";

export function DefaultLayout() {
  return (
    <S.Layout>
      <Sidebar />
      <Outlet />
    </S.Layout>
  );
}
