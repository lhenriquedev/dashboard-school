import styled from "styled-components";

interface FormGridProps {
  columns?: number;
}

interface FormRowProps {
  colStart?: number;
  colEnd?: number;
}

export const StudentByIdContainer = styled.section`
  flex: 1;
  padding: 2rem;
`;
export const StudentByIdContent = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;

  header {
    margin-bottom: 2rem;
  }
`;
export const FormControl = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    width: 12.5rem;
    padding: 0.8rem;
    background: #34d399;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: 200ms ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const FormRow = styled.div<FormRowProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  grid-column: ${({ colStart, colEnd }) =>
    `${colStart && colEnd ? `${colStart}/${colEnd}` : "1"}`};
`;
export const FormLabel = styled.label`
  width: 100%;
`;
export const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #f9fafb;
`;
export const FormError = styled.span`
  width: 100%;
  color: #ef4444;
`;
export const FormGrid = styled.div<FormGridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 1rem;
`;
