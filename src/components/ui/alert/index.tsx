import * as AlertDialog from "@radix-ui/react-alert-dialog";

import * as S from "./styles";

interface AlertDialogProps {
  open: boolean;
  onOpenChange: () => void;
  handleOnClick: (param?: any) => void;
}

export const AlertDialogComponent = ({
  open,
  onOpenChange,
  handleOnClick,
}: AlertDialogProps) => (
  <S.AlertDialogWrapper open={open} onOpenChange={onOpenChange}>
    <AlertDialog.Portal>
      <S.AlertDialogOverlay />
      <S.AlertDialogContent>
        <S.AlertDialogTitle>Você tem certeza?</S.AlertDialogTitle>
        <S.AlertDialogDescription>
          Esta ação não poderá ser desfeita. Isto irá apagar permanentemente a
          conta deste usuário
        </S.AlertDialogDescription>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <S.AlertDialogButtonCancel>Cancelar</S.AlertDialogButtonCancel>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild onClick={handleOnClick}>
            <S.AlertDialogButtonAction>
              Sim, deletar a conta
            </S.AlertDialogButtonAction>
          </AlertDialog.Action>
        </div>
      </S.AlertDialogContent>
    </AlertDialog.Portal>
  </S.AlertDialogWrapper>
);
