import { AiFillContacts, AiFillSignal } from "react-icons/ai";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import * as React from "react";

export interface HeaderTp {
  label: String;
  icon: JSX.Element;
}

export const itemsHeader: HeaderTp[] = [
  {
    label: "Skills",
    icon: <AiFillSignal size="2vh" />,
  },
  {
    label: "Projects",
    icon: <AiTwotoneFolderOpen size="2vh" />,
  },
  {
    label: "About Me",
    icon: <AiOutlineUser size="2vh" />,
  },
  {
    label: "Contact",
    icon: <AiFillContacts size="2vh" color="#F4DB7D" />,
  },
];
