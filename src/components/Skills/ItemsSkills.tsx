import * as React from "react";

export interface SkillsProp {
  label: string;
  color: string;
  rating: number;
}

const ItemSkills: SkillsProp[] = [
  {
    label: "HTML",
    color: "#F99A0B",
    rating: 5,
  },
  {
    label: "CSS",
    color: "#0592E1",
    rating: 5,
  },
  {
    label: "JAVASCRIPT",
    color: "#48AA1A",
    rating: 5,
  },
  {
    label: "JAVA",
    color: "#DF0F0F",
    rating: 4,
  },
  {
    label: "REACTJS",
    color: "#0592E1",
    rating: 4,
  },
  {
    label: "TYPESCRIPT",
    color: "yellow",
    rating: 4,
  },
  {
    label: "NODEJS",
    color: "#48AA1A",
    rating: 4,
  },
  {
    label: "SASS",
    color: "#bf4080",
    rating: 4,
  },
];

export default ItemSkills;
