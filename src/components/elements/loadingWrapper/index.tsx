import { Loading } from "../../ui/Loading";
import * as S from "./styles";

interface LoadingProps {
  isLoading: boolean;
  children: JSX.Element;
}

export function LoadingWrapper({ isLoading, children }: LoadingProps) {
  if (isLoading) {
    return (
      <S.LoadingContent>
        <Loading size={52} />
      </S.LoadingContent>
    );
  }

  return <>{children}</>;
}
