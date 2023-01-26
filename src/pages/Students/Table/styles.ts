import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.theme["neutral-200"]};
  border-radius: 6px;
  overflow: hidden;
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
`;

export const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
`;

export const TdActions = styled.td`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const STATUS_COLORS = {
  red: "red-500",
  green: "green-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme["white"]};
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

export const EditPencil = styled(HiOutlinePencilSquare)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme["indigo-500"]};

  &:hover {
    color: ${(props) => props.theme["indigo-700"]};
  }
`;
