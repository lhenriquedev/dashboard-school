import * as S from "./styles";

import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { Loading } from "../../../components/ui/Loading";

import { StudentProps } from "../../../@types/types";

interface TableProps {
  data: StudentProps[];
  columns: string[];
  isLoading: boolean;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

export function Table({
  data,
  columns,
  isLoading,
  onEdit,
  onRemove,
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
              <S.TableRow key={student.id}>
                <S.TableCell>{student.name}</S.TableCell>
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
                  <S.TableButton onClick={() => onRemove(student.id)}>
                    <S.Trash />
                  </S.TableButton>
                  <S.TableButton onClick={() => onEdit(student.id)}>
                    <S.EditPencil />
                  </S.TableButton>
                </S.TdActions>
              </S.TableRow>
            ))}
          </tbody>
        </>
      )}

      {/* <span>alunos: {data.length}</span> */}
    </S.Table>
  );
}
