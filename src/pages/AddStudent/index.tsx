import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";

import * as S from "./styles";
import { BackButton } from "../../components/elements/backButton";
import { StudentForm } from "../../components/elements/forms/AddStudentForm";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../../components/elements/Loading";

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
  const navigate = useNavigate();

  const methods = useForm<FormDataProps>({
    defaultValues: {
      city: "Butiá",
    },
  });

  const onSubmit = async (data: FormDataProps) => {
    try {
      await supabase.from("students").insert(data);
      toast("Aluno cadastrado com sucesso", {
        type: "success",
      });
      navigate("/students");
    } catch (error) {
      toast("Erro ao cadastrar aluno", {
        type: "error",
      });
    }
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
            <button>
              {methods.formState.isSubmitting ? (
                <Loading size={20} />
              ) : (
                "Criar aluno"
              )}
            </button>
          </S.FormControl>
        </FormProvider>
      </S.AddStudentContent>
    </S.AddStudentContainer>
  );
}
