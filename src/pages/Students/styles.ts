import styled from "styled-components";

export const StudentContainer = styled.section`
  padding: 2rem;
  flex: 1;
`;

export const StudentContent = styled.div`
  height: fit-content;
  background: #fff;
  border-radius: 8px;
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

export const StudentTableHeader = styled.div`
  border-top: 1px solid ${(props) => props.theme["neutral-200"]};
  border-right: 1px solid ${(props) => props.theme["neutral-200"]};
  border-left: 1px solid ${(props) => props.theme["neutral-200"]};
  overflow: hidden;

  padding: 1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  h2 {
    font-size: 1.25rem;
  }
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
export const PaginationContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const PaginationButton = styled.button`
  border: none;
  background: ${(props) => props.theme["indigo-700"]};
  padding: 0.5rem;
  color: #fff;
  border-radius: 6px;
  transition: background 200ms;

  &:hover {
    background: ${(props) => props.theme["indigo-500"]};
    cursor: pointer;
  }
`;
