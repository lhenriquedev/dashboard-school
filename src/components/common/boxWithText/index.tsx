import * as S from "./styles";

export function BoxWithText({ students, text }: any) {
  return (
    <S.BoxWithTextContainer>
      <header>
        <span>{text}</span>
      </header>
      {students && <span>{students.length}</span>}
    </S.BoxWithTextContainer>
  );
}
