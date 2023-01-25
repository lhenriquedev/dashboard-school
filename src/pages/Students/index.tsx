import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import "../../styles/global.css";
import { Table } from "./Table";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { BoxWithText } from "../../components/BoxWithText";

type StudentProps = {
  id: number;
  name: string;
  age: number;
  school: string;
  school_id: string;
  district: string;
  street: string;
};

export function Student() {
  const [students, setStudents] = useState<StudentProps[]>([
    {
      id: 1,
      name: "Luiz Henrique",
      age: 22,
      school: "Vis. de Mauá",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 2,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 3,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 4,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 5,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 6,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 7,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
    {
      id: 8,
      name: "Camila Nascente",
      age: 21,
      school: "Marechal Rondon",
      school_id: "FAB12304DE",
      district: "Centro",
      street: "Rua do comércio",
    },
  ]);

  const columns: string[] = [
    "Nome",
    "Idade",
    "Escola",
    "Matrícula",
    "Bairro",
    "Endereço",
    "Ações",
  ];

  const navigate = useNavigate();

  const removeStudent = (id: number) => {
    const removedStudent = students.filter((student) => student.id !== id);
    setStudents(removedStudent);
  };

  const editStudent = (id: number) => {
    navigate(`/students/${id}`);
  };

  return (
    <S.StudentContainer>
      <S.StudentData>
        <BoxWithText />
        <BoxWithText />
        <BoxWithText />
      </S.StudentData>
      <S.StudentContent>
        <S.TableHeader>
          <div>
            <h2>Todos os alunos</h2>
          </div>
          {/* <S.SearchInputContainer>
            <input type="text" placeholder="Pesquise por um aluno" />
          </S.SearchInputContainer> */}
        </S.TableHeader>
        <Table
          data={students}
          columns={columns}
          onEdit={editStudent}
          onRemove={removeStudent}
        />
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel={<HiOutlineChevronRight size={15} />}
          pageRangeDisplayed={5}
          pageCount={10}
          activeClassName="active"
          previousLabel={<HiOutlineChevronLeft size={15} />}
        />
      </S.StudentContent>
    </S.StudentContainer>
  );
}
