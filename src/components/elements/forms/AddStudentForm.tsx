import { useFormContext } from "react-hook-form";

import * as S from "./styles";

export function StudentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <S.FormGrid columns={4}>
        <S.FormRow colStart={1} colEnd={4}>
          <S.FormLabel>Nome completo:</S.FormLabel>
          <S.FormInput
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <S.FormError>Este campo é obrigatório</S.FormError>}
        </S.FormRow>
        <S.FormRow colStart={4} colEnd={5}>
          <S.FormLabel>Idade:</S.FormLabel>
          <S.FormInput
            type="text"
            {...register("age", {
              required: true,
            })}
          />
          {errors.age && <S.FormError>Este campo é obrigatório</S.FormError>}
        </S.FormRow>
      </S.FormGrid>
      <S.FormGrid columns={2}>
        <S.FormRow>
          <S.FormLabel>Escola:</S.FormLabel>
          <S.FormInput
            type="text"
            {...register("school", {
              required: true,
            })}
          />
          {errors.school && <S.FormError>Este campo é obrigatório</S.FormError>}
        </S.FormRow>
        <S.FormRow colStart={2} colEnd={-1}>
          <S.FormLabel>Matrícula:</S.FormLabel>
          <S.FormInput
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
            type="text"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone && <S.FormError>Este campo é obrigatório</S.FormError>}
        </S.FormRow>
        <S.FormRow colStart={2} colEnd={-1}>
          <S.FormLabel>RG da mãe:</S.FormLabel>
          <S.FormInput
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
            type="text"
            {...register("city", {
              required: true,
            })}
          />
          {errors.city && <S.FormError>Este campo é obrigatório</S.FormError>}
        </S.FormRow>
        <S.FormRow colStart={2} colEnd={3}>
          <S.FormLabel>Bairro:</S.FormLabel>
          <S.FormInput
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
            type="text"
            {...register("street", {
              required: true,
            })}
          />
          {errors.street && <S.FormError>Este campo é obrigatório</S.FormError>}
        </S.FormRow>
      </S.FormGrid>
    </>
  );
}
