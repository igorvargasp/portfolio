import { AiFillContacts, AiFillSignal } from "react-icons/ai";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import * as React from "react";

export interface HeaderTp {
  label: String;
  icon: JSX.Element;
  route: string;
}

export const itemsHeader: HeaderTp[] = [
  {
    label: "Skills",
    icon: <AiFillSignal size="2vh" />,
    route: "skills",
  },
  {
    label: "Projects",
    icon: <AiTwotoneFolderOpen size="2vh" />,
    route: "projects",
  },
  {
    label: "About Me",
    icon: <AiOutlineUser size="2vh" />,
    route: "about-me",
  },
  {
    label: "Contact",
    icon: <AiFillContacts size="2vh" color="#F4DB7D" />,
    route: "contact",
  },
];
