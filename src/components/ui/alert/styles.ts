import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { AlertAnimation } from "./animation";

export const AlertDialogWrapper = styled(AlertDialog.Root)``;

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.44);
`;

export const AlertDialogContent = styled(AlertDialog.Content)`
  background: ${(props) => props.theme["white"]};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  width: 90vw;
  max-width: 31.25rem;
  max-height: 85vh;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  padding: 1.5rem;
  animation: ${AlertAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const AlertDialogTitle = styled(AlertDialog.Title)`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin-bottom: 1rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${(props) => props.theme["neutral-500"]};
`;

export const AlertDialogCancel = styled(AlertDialog.Cancel)`
  background-color: red;
`;
export const AlertDialogAction = styled(AlertDialog.Action)``;

export const AlertDialogButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0 0.9375rem;
  font-size: 0.9375rem;
  height: 35px;
  line-height: 1;
  border: none;
  cursor: pointer;
`;

export const AlertDialogButtonCancel = styled(AlertDialogButton)`
  font-weight: bold;
  color: ${(props) => props.theme["neutral-700"]};
  &:hover {
    background: ${(props) => props.theme["neutral-200"]};
  }
`;

export const AlertDialogButtonAction = styled(AlertDialogButton)`
  background: ${(props) => props.theme["red-100"]};
  font-weight: bold;
  color: ${(props) => props.theme["red-700"]};
  &:hover {
    background: ${(props) => props.theme["red-200"]};
  }
`;
