import styled from "styled-components";

export const BoxWithTextContainer = styled.div`
  background: ${(props) => props.theme["white"]};
  border: 1px solid ${(props) => props.theme["neutral-200"]};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

  header {
    margin-bottom: 1rem;

    span {
      font-size: 1rem;
    }
  }

  span {
    font-size: 52px;
  }
`;
