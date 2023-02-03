import * as S from "./styles";

import { Loading } from "../../../components/ui/Loading";
import { columns } from "../../../data/columns";

import { StudentProps } from "../../../@types/types";
import { AlertDialogComponent } from "../../../components/ui/alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudent from "../../../hooks/useStudents";
import { toast } from "react-toastify";
import supabase from "../../../supabase";

export function Table() {
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { data, setData, isLoading } = useStudent();
  const navigate = useNavigate();

  const handleOpenRemoveDialog = (id: number) => {
    setSelectedStudent(id);
    setIsAlertOpen(true);
  };

  const removeStudent = async (id: number) => {
    try {
      await supabase.from("students").delete().eq("id", id);
      const removedStudent = data.filter((student) => student.id !== id);
      setData(removedStudent);
      toast("Aluno deletado com sucesso!", { type: "success" });
    } catch {
      toast("Erro ao apagar o aluno!", { type: "error" });
    }
  };

  const onEditStudent = (id: number) => {
    navigate(`/students/${id}`);
  };

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

        {isLoading ? (
          <tbody style={{ position: "relative", height: "100px" }}>
            <S.TableLoading>
              <Loading size={32} />
            </S.TableLoading>
          </tbody>
        ) : null}

        {data.length === 0 && !isLoading ? (
          <tbody style={{ position: "relative", height: "100px" }}>
            <S.TableNoUser>
              <p>Não há alunos cadastrados 😓</p>
            </S.TableNoUser>
          </tbody>
        ) : null}

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
                {student.status === "Ativo" && (
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
