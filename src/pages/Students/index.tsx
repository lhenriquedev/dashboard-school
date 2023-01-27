import { useEffect, useState } from "react";
import supabase from "../../supabase";

import { useNavigate } from "react-router-dom";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import * as S from "./styles";
import "../../styles/global.css";

import { BoxWithText } from "../../components/common/boxWithText";
import { Table } from "./Table";

import { StudentProps } from "../../@types/types";
import { columns } from "../../data/columns";
import { Greeting } from "../../components/common/greeting";
import { getPagination } from "../../utils/getPagination";
import { LoadingWrapper } from "../../components/elements/loadingWrapper";

export function Student() {
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const getStudents = async () => {
    setIsLoading(true);

    const {
      data: newStudents,
      error,
      count,
    } = await supabase
      .from("students")
      .select("*", { count: "exact" })
      .limit(10)
      .order("id", { ascending: false });

    if (!error) {
      setStudents(newStudents);
    }
    setIsLoading(false);
  };

  const removeStudent = (id: number) => {
    const removedStudent = students.filter((student) => student.id !== id);
    setStudents(removedStudent);
  };

  const editStudent = (id: number) => {
    navigate(`/students/${id}`);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <S.StudentContainer>
      <Greeting />
      <S.StudentData>
        <BoxWithText students={students} text="Alunos cadastrados" />
        <BoxWithText />
        <BoxWithText />
      </S.StudentData>
      <S.StudentContent>
        <Table
          data={students}
          isLoading={isLoading}
          columns={columns}
          onEdit={editStudent}
          onRemove={removeStudent}
        />
      </S.StudentContent>
      <S.PaginationContainer>
        <S.PaginationButton>
          <HiOutlineChevronLeft />
        </S.PaginationButton>
        <S.PaginationButton>
          <HiOutlineChevronRight />
        </S.PaginationButton>
      </S.PaginationContainer>
    </S.StudentContainer>
  );
}
