import {
  HiOutlineUserGroup,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";

export const linksArr = [
  // {
  //   label: "Dashboard",
  //   icon: <HiOutlineSquares2X2 />,
  //   to: "/",
  // },
  {
    label: "Alunos",
    icon: <HiOutlineUserGroup />,
    to: "/students",
  },
  {
    label: "Meu perfil",
    icon: <HiOutlineUser />,
    to: "/profile",
  },
];
