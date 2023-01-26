import styled from "styled-components";

export const StudentContainer = styled.section`
  padding: 2rem;
  flex: 1;
`;

export const StudentContent = styled.div`
  height: fit-content;
  background: #fff;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["neutral-200"]};
`;

export const StudentData = styled.header`
  width: 100%;

  background: transparent;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 3rem;
`;

export const SearchInputContainer = styled.div`
  width: 250px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #f9fafb;
  overflow: hidden;

  input {
    width: 100%;
    background: #f9fafb;
    border: none;
    padding: 0.5rem;
    outline: none;
  }
`;
