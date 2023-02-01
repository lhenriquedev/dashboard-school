import * as S from "./styles";

import { Loading } from "../../../components/ui/Loading";
import { columns } from "../../../data/columns";

import { StudentProps } from "../../../@types/types";
import { AlertDialogComponent } from "../../../components/ui/alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudent from "../../../hooks/useStudents";

export function Table() {
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { data, setData, isLoading } = useStudent();
  const navigate = useNavigate();

  const handleOpenRemoveDialog = (id: number) => {
    setSelectedStudent(id);
    setIsAlertOpen(true);
  };

  const removeStudent = (id: number) => {
    const removedStudent = data.filter((student) => student.id !== id);
    setData(removedStudent);
  };

  const onEditStudent = (id: number) => {
    navigate(`/students/${id}`);
  };

  if (isLoading) {
    return <Loading size={52} />;
  }

  return (
    <>
      <S.Table>
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
                <S.TableButton
                  onClick={() => handleOpenRemoveDialog(student.id)}
                >
                  <S.Trash />
                </S.TableButton>
                <S.TableButton onClick={() => onEditStudent(student.id)}>
                  <S.EditPencil />
                </S.TableButton>
              </S.TdActions>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
      <AlertDialogComponent
        open={isAlertOpen}
        onOpenChange={() => setIsAlertOpen((prev) => !prev)}
        handleOnClick={() => removeStudent(selectedStudent)}
      />
    </>
  );
}
