import { Form, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import * as S from "./styles";
import { BackButton } from "../../components/elements/backButton";
import { StudentForm } from "../../components/elements/forms/AddStudentForm";
import { SubmitHandler } from "react-hook-form/dist/types";

interface FormDataProps {
  age: string;
  district: string;
  city: string;
  document: string;
  name: string;
  phone: string;
  school: string;
  street: string;
}

export function AddStudent() {
  const methods = useForm<FormDataProps>();

  const onSubmit = (data: FormDataProps) => {
    console.log(data);
  };

  // adicionar campo telefone, RG da mãe

  return (
    <S.AddStudentContainer>
      <S.AddStudentContent>
        <header>
          <BackButton />
          <h2>Adicionar aluno</h2>
        </header>
        <FormProvider {...methods}>
          <S.FormControl onSubmit={methods.handleSubmit(onSubmit)}>
            <StudentForm />
            <button>Salvar</button>
          </S.FormControl>
        </FormProvider>
      </S.AddStudentContent>
    </S.AddStudentContainer>
  );
}
