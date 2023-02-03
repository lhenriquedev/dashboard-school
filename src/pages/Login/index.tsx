import { useForm } from "react-hook-form";
import { HiOutlineLockOpen } from "react-icons/hi2";

import * as S from "./styles";

import { useAuth } from "../../context/userContext";

interface FormLoginProps {
  email: string;
  password: string;
}

export function Login() {
  const { signInUser } = useAuth();
  const { register, handleSubmit } = useForm<FormLoginProps>();

  const onSubmit = async ({ email, password }: FormLoginProps) => {
    signInUser(email, password);
  };

  return (
    <S.LoginWrapper>
      <S.LoginContent>
        <S.LoginContentTitle>
          <HiOutlineLockOpen size={32} />
          <h2>Faça login com seus dados</h2>
          <p>Bem vindo! Estamos feliz em te ver de volta</p>
        </S.LoginContentTitle>
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.FormControl>
            <S.FormLabel>Email</S.FormLabel>
            <S.FormInput
              {...register("email")}
              placeholder="Digite o seu email"
            />
          </S.FormControl>
          <S.FormControl>
            <S.FormLabel>Senha</S.FormLabel>
            <S.FormInput
              type="password"
              {...register("password")}
              placeholder="Digite sua senha"
            />
          </S.FormControl>
          <S.FormButton type="submit">Entrar</S.FormButton>
        </S.LoginForm>
      </S.LoginContent>
    </S.LoginWrapper>
  );
}
