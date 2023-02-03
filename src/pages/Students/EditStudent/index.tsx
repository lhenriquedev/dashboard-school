import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../../components/ui/button/backButton";
import { Loading } from "../../../components/ui/Loading";
import supabase from "../../../supabase";

import { toast } from "react-toastify";

interface EditStudentProps {
  age: string;
  district: string;
  city: string;
  document: string;
  name: string;
  phone: string;
  school: string;
  registry: string;
  street: string;
  id?: number;
  status: "Ativo" | "Inativo";
  created_at?: string;
}

import * as S from "./styles";
import { LoadingWrapper } from "../../../components/elements/loadingWrapper";
import { SelectComponent } from "../../../components/form/SelectComponent";

export function EditStudent() {
  const [editedStudent, setEditedStudent] = useState<EditStudentProps>();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const getStudentById = async () => {
    const { data: student, error } = await supabase
      .from("students")
      .select("*")
      .eq("id", id);

    if (!error) {
      setEditedStudent(student && student[0]);
    }
    setIsLoading(false);
  };

  const methods = useForm<EditStudentProps>();

  const onSubmit = async (data: EditStudentProps) => {
    try {
      await supabase
        .from("students")
        .update({ ...data })
        .eq("id", id);

      toast("Aluno editado com sucesso!", {
        type: "success",
      });
      navigate("/students");
    } catch (error) {
      toast("Erro ao editar aluno", {
        type: "error",
      });
    }
  };

  useEffect(() => {
    getStudentById();
  }, [id]);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <S.EditStudentContainer>
        <S.EditStudentContent>
          <header>
            <BackButton />
            <h2>Editar aluno</h2>
          </header>
          <FormProvider {...methods}>
            <S.FormControl onSubmit={methods.handleSubmit(onSubmit)}>
              <S.FormGrid columns={4}>
                <S.FormRow colStart={1} colEnd={4}>
                  <S.FormLabel>Nome completo:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.name}
                    type="text"
                    {...methods.register("name", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.name && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
                <S.FormRow colStart={4} colEnd={5}>
                  <S.FormLabel>Idade:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.age}
                    type="text"
                    {...methods.register("age", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.age && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
              </S.FormGrid>
              <S.FormGrid columns={3}>
                <S.FormRow colStart={1} colEnd={2}>
                  <S.FormLabel>Escola:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.school}
                    type="text"
                    {...methods.register("school", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.school && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
                <S.FormRow colStart={2} colEnd={3}>
                  <S.FormLabel>Matrícula:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.registry}
                    type="text"
                    {...methods.register("registry", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.document && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>

                <S.FormRow colStart={3} colEnd={-1}>
                  <S.FormLabel>Status:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.status}
                    type="text"
                    {...methods.register("status", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.document && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
              </S.FormGrid>
              <S.FormGrid columns={2}>
                <S.FormRow>
                  <S.FormLabel>Celular:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.phone}
                    type="text"
                    {...methods.register("phone", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.phone && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
                <S.FormRow colStart={2} colEnd={-1}>
                  <S.FormLabel>RG da mãe:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.document}
                    type="text"
                    {...methods.register("document", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.document && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
              </S.FormGrid>
              <S.FormGrid columns={3}>
                <S.FormRow colStart={1} colEnd={2}>
                  <S.FormLabel>Cidade:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.city}
                    type="text"
                    {...methods.register("city", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.city && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
                <S.FormRow colStart={2} colEnd={3}>
                  <S.FormLabel>Bairro:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.district}
                    type="text"
                    {...methods.register("district", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.district && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
                <S.FormRow colStart={3} colEnd={-1}>
                  <S.FormLabel>Endereço:</S.FormLabel>
                  <S.FormInput
                    defaultValue={editedStudent?.street}
                    type="text"
                    {...methods.register("street", {
                      required: true,
                    })}
                  />
                  {methods.formState.errors.street && (
                    <S.FormError>Este campo é obrigatório</S.FormError>
                  )}
                </S.FormRow>
              </S.FormGrid>
              <button type="submit">
                {methods.formState.isSubmitting ? (
                  <Loading size={10} />
                ) : (
                  "Salvar"
                )}
              </button>
            </S.FormControl>
          </FormProvider>
        </S.EditStudentContent>
      </S.EditStudentContainer>
    </LoadingWrapper>
  );
}
