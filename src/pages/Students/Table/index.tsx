import * as S from "./styles";

import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { Loading } from "../../../components/elements/Loading";

type StudentProps = {
  id: number;
  name: string;
  age: number;
  school: string;
  school_id: string;
  district: string;
  street: string;
};

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
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.school}</td>
                <td>{student.school_id}</td>
                <td>{student.district}</td>
                <td>{student.street}</td>
                <S.TdActions>
                  <S.TableButton onClick={() => onEdit(student.id)}>
                    <HiOutlinePencilSquare size={20} color="#3b82f6" />
                    <span>Editar</span>
                  </S.TableButton>
                  <S.TableButton onClick={() => onRemove(student.id)}>
                    <HiOutlineTrash size={20} color="#ef4444" />
                    <span>Excluir</span>
                  </S.TableButton>
                </S.TdActions>
              </tr>
            ))}
          </tbody>
        </>
      )}

      {/* <span>alunos: {data.length}</span> */}
    </S.Table>
  );
}
