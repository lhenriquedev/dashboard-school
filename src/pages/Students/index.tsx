import { useEffect, useState } from "react";
import supabase from "../../supabase";

import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import "../../styles/global.css";
import { Table } from "./Table";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { BoxWithText } from "../../components/BoxWithText";

type StudentProps = {
  id: number;
  name: string;
  age: number;
  school: string;
  registry: string;
  district: string;
  street: string;
  phone: string;
};

export function Student() {
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const getStudents = async () => {
    setIsLoading(true);

    const { data: students, error } = await supabase
      .from("students")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setStudents(students);
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
      <S.StudentData>
        <BoxWithText students={students} text="Alunos cadastrados" />
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
          isLoading={isLoading}
          columns={columns}
          onEdit={editStudent}
          onRemove={removeStudent}
        />
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel={<HiOutlineChevronRight size={15} />}
          pageRangeDisplayed={5}
          pageCount={5}
          activeClassName="active"
          previousLabel={<HiOutlineChevronLeft size={15} />}
        />
      </S.StudentContent>
    </S.StudentContainer>
  );
}
