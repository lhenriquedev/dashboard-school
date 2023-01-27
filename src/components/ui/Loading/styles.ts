import styled from "styled-components";
import { LoaderAnimation } from "./loaderAnimation";

interface LoaderProps {
  size: number;
}

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div<LoaderProps>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #34d399;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  animation: ${LoaderAnimation} 1s linear infinite;
`;
