import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <S.BackButton onClick={() => navigate(-1)}>
      <HiArrowLeft size={16} />
    </S.BackButton>
  );
}
