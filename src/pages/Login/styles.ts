import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-items: center;
  background: ${(props) => props.theme["neutral-100"]};
`;

export const LoginContent = styled.div`
  background: ${(props) => props.theme["white"]};

  width: 31.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border: 1px solid ${(props) => props.theme["neutral-200"]};
`;

export const LoginContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  margin-bottom: 3rem;

  svg {
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme["neutral-700"]};
  }

  p {
    color: ${(props) => props.theme["neutral-500"]};
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FormControl = styled.div``;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["neutral-200"]};
  font-size: 1rem;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 3rem;

  margin-top: 1.5rem;

  border: none;
  background: ${(props) => props.theme["indigo-700"]};
  border-radius: 6px;
  color: ${(props) => props.theme["white"]};
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  transition: background 200ms;

  &:hover {
    background: ${(props) => props.theme["indigo-900"]};
  }
`;
