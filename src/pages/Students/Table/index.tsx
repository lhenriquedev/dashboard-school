import * as S from "./styles";

import { Loading } from "../../../components/ui/Loading";

import { StudentProps } from "../../../@types/types";
import { AlertDialogComponent } from "../../../components/ui/alert";

interface TableProps {
  data: StudentProps[];
  columns: string[];
  isLoading: boolean;
  isDeleteDialogOpen: boolean;
  onOpenDialog: () => void;
  onEdit: (id: number) => void;
  onRemoveStudent: (id: number) => void;
}

export function Table({
  data,
  columns,
  isLoading,
  isDeleteDialogOpen,
  onOpenDialog,
  onEdit,
  onRemoveStudent,
}: TableProps) {
  return (
    <S.Table>
      {isLoading ? (
        <Loading size={52} />
      ) : (
        <>
          <thead>
            {/* <caption>Alunos</caption> */}
            <S.TableRowHeader>
              {columns.map((col) => (
                <S.TableHead key={col}>{col}</S.TableHead>
              ))}
            </S.TableRowHeader>
          </thead>
          <tbody>
            {data.map((student) => (
              <>
                <S.TableRow key={student.id}>
                  <S.TableCell>
                    <div>
                      {student.image && (
                        <S.TableCellImage loading="lazy" src={student.image} />
                      )}
                      {student.name}
                    </div>
                  </S.TableCell>
                  <S.TableCell>{student.age}</S.TableCell>
                  <S.TableCell>{student.school}</S.TableCell>
                  <S.TableCell>{student.street}</S.TableCell>
                  <S.TableCell>{student.district}</S.TableCell>
                  <S.TableCell>
                    {student.status === "Matriculado" && (
                      <S.Status statusColor="green" statusTextColor="green">
                        {student.status}
                      </S.Status>
                    )}
                    {student.status === "Inativo" && (
                      <S.Status statusColor="red" statusTextColor="red">
                        {student.status}
                      </S.Status>
                    )}
                  </S.TableCell>
                  <S.TdActions>
                    <S.TableButton onClick={onOpenDialog}>
                      <S.Trash />
                    </S.TableButton>
                    <S.TableButton onClick={() => onEdit(student.id)}>
                      <S.EditPencil />
                    </S.TableButton>
                  </S.TdActions>
                </S.TableRow>

                <AlertDialogComponent
                  open={isDeleteDialogOpen}
                  onOpenChange={onOpenDialog}
                  handleOnClick={() => onRemoveStudent(student.id)}
                />
              </>
            ))}
          </tbody>
        </>
      )}

      {/* <span>alunos: {data.length}</span> */}
    </S.Table>
  );
}
