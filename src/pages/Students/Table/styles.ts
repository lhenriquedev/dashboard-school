import styled from "styled-components";

export const Table = styled.table`
  background: #ffffff;
  margin-bottom: 2rem;
  table-layout: fixed;
  width: 100%;
  border-radius: 8px;

  border-collapse: collapse;
  border-spacing: 0;
  padding: 2rem;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px; */

  thead {
    margin: 2rem;

    caption {
      padding: 1rem;
      font-size: 2rem;

      margin-bottom: 1rem;
    }

    th {
      text-align: left;
      line-height: 20px;
      padding: 0 1rem;
      font-weight: 500;
      color: #9ca3af;
    }
  }

  tbody {
    :before {
      /* This doesn't work because of border-collapse */
      line-height: 1em;
      content: ".";
      color: white; /* bacground color */
      display: block;
    }

    tr {
      color: #292d32;

      &:nth-child(odd) {
        background-color: #ecfdf5;
      }

      &:hover {
        background: #d1fae5;
      }

      td {
        width: fit-content;
        padding: 1rem;
        text-align: left;
      }
    }
  }
`;

export const TdActions = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableButton = styled.button`
  border: none;
  background: transparent;
  padding: 0.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  transition: color 150ms;

  &:first-child {
    margin-right: 0.5rem;
  }

  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    color: #10b981;
  }
`;
