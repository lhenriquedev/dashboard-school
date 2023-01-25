import * as S from "./styles";

interface LoadingProps {
  size: number;
}

export function Loading({ size }: LoadingProps) {
  return (
    <S.LoaderWrapper>
      <S.Loader size={size} />
    </S.LoaderWrapper>
  );
}
