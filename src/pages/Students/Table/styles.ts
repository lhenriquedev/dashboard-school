import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.theme["neutral-200"]};
  border-radius: 6px;
`;

export const TableLoading = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const TableNoUser = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  p {
    font-size: 1.5rem;
  }
`;

export const TableHead = styled.th`
  padding: 1rem;
  text-align: left;
  line-height: 1.6;
`;

export const TableRowHeader = styled.tr`
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme["neutral-200"]};
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme["neutral-200"]};

  &:hover {
    background: ${(props) => props.theme["neutral-100"]};
  }
`;

export const TableCellImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const TableCell = styled.td`
  padding: 1rem;
  text-align: left;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const TdActions = styled.td`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const STATUS_COLORS = {
  red: "red-200",
  green: "green-200",
} as const;

const STATUS_COLORS_TEXT = {
  red: "red-800",
  green: "green-800",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
  statusTextColor: keyof typeof STATUS_COLORS_TEXT;
}

export const Status = styled.span<StatusProps>`
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme[STATUS_COLORS_TEXT[props.statusTextColor]]};
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS_TEXT[props.statusColor]]};
  }
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

export const Trash = styled(HiOutlineTrash)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme["red-500"]};

  &:hover {
    color: ${(props) => props.theme["red-700"]};
  }
`;

export const EditPencil = styled(HiOutlinePencil)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme["indigo-500"]};

  &:hover {
    color: ${(props) => props.theme["indigo-700"]};
  }
`;
