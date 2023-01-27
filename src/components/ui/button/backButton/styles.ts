import styled from "styled-components";

export const BackButton = styled.button`
  width: fit-content;
  background: ${(props) => props.theme["neutral-100"]};
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
