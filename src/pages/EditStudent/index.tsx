import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/ui/button/backButton";
import { Loading } from "../../components/ui/Loading";
import supabase from "../../supabase";

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
  created_at?: string;
}

import * as S from "./styles";
import { LoadingWrapper } from "../../components/elements/loadingWrapper";

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditStudentProps>();

  const onSubmit = async ({
    age,
    city,
    district,
    document,
    name,
    phone,
    registry,
    school,
    street,
  }: EditStudentProps) => {
    try {
      const { error } = await supabase
        .from("students")
        .update({
          name,
          age,
          phone,
          registry,
          school,
          street,
          city,
          district,
          document,
        })
        .eq("id", id);

      toast("Aluno editado com sucesso!", {
        type: "success",
      });
      navigate("/students");
    } catch (error) {}
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

          <S.FormControl onSubmit={handleSubmit(onSubmit)}>
            <S.FormGrid columns={4}>
              <S.FormRow colStart={1} colEnd={4}>
                <S.FormLabel>Nome completo:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.name}
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
              <S.FormRow colStart={4} colEnd={5}>
                <S.FormLabel>Idade:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.age}
                  type="text"
                  {...register("age", {
                    required: true,
                  })}
                />
                {errors.age && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
            </S.FormGrid>
            <S.FormGrid columns={2}>
              <S.FormRow>
                <S.FormLabel>Escola:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.school}
                  type="text"
                  {...register("school", {
                    required: true,
                  })}
                />
                {errors.school && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
              <S.FormRow colStart={2} colEnd={-1}>
                <S.FormLabel>Matrícula:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.registry}
                  type="text"
                  {...register("registry", {
                    required: true,
                  })}
                />
                {errors.document && (
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
                  {...register("phone", {
                    required: true,
                  })}
                />
                {errors.phone && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
              <S.FormRow colStart={2} colEnd={-1}>
                <S.FormLabel>RG da mãe:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.document}
                  type="text"
                  {...register("document", {
                    required: true,
                  })}
                />
                {errors.document && (
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
                  {...register("city", {
                    required: true,
                  })}
                />
                {errors.city && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
              <S.FormRow colStart={2} colEnd={3}>
                <S.FormLabel>Bairro:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.district}
                  type="text"
                  {...register("district", {
                    required: true,
                  })}
                />
                {errors.district && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
              <S.FormRow colStart={3} colEnd={-1}>
                <S.FormLabel>Endereço:</S.FormLabel>
                <S.FormInput
                  defaultValue={editedStudent?.street}
                  type="text"
                  {...register("street", {
                    required: true,
                  })}
                />
                {errors.street && (
                  <S.FormError>Este campo é obrigatório</S.FormError>
                )}
              </S.FormRow>
            </S.FormGrid>
            <button type="submit">
              {isSubmitting ? <Loading size={20} /> : "Salvar"}
            </button>
          </S.FormControl>
        </S.EditStudentContent>
      </S.EditStudentContainer>
    </LoadingWrapper>
  );
}
