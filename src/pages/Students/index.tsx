import { useEffect, useState } from "react";
import supabase from "../../supabase";

import { useNavigate } from "react-router-dom";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlus,
} from "react-icons/hi2";

import * as S from "./styles";
import "../../styles/global.css";

import { BoxWithText } from "../../components/common/boxWithText";
import { Table } from "./Table";

import { StudentProps } from "../../@types/types";
import { columns } from "../../data/columns";
import { Greeting } from "../../components/common/greeting";
import useStudent from "../../hooks/useStudents";

export function Student() {
  const { data } = useStudent();
  const navigate = useNavigate();

  return (
    <S.StudentContainer>
      <Greeting />
      <S.StudentData>
        <BoxWithText students={data} text="Alunos cadastrados" />
      </S.StudentData>
      <S.StudentContent>
        <S.StudentTableHeader>
          <h2>Alunos</h2>
          <S.CreateStudentButton onClick={() => navigate("/add-student")}>
            <HiOutlinePlus size={18} />
            <span>Adicionar</span>
          </S.CreateStudentButton>
        </S.StudentTableHeader>
        <Table />
      </S.StudentContent>
      {/* <S.PaginationContainer>
        <S.PaginationButton>
          <HiOutlineChevronLeft />
        </S.PaginationButton>
        <S.PaginationButton>
          <HiOutlineChevronRight />
        </S.PaginationButton>
      </S.PaginationContainer> */}
    </S.StudentContainer>
  );
}
