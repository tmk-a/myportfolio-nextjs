import { IconProps } from "@/types/icon";
import { ReactIcon } from "@/components/core/icons/ReactIcon";
import { NextjsIcon } from "@/components/core/icons/NextjsIcon";
import { TypescriptIcon } from "@/components/core/icons/TypescriptIcon";
import { JavascriptIcon } from "@/components/core/icons/JavascriptIcon";
import { JavaIcon } from "@/components/core/icons/JavaIcon";
import { TailwindIcon } from "@/components/core/icons/TailwindIcon";
import { PostgresIcon } from "@/components/core/icons/PostgresIcon";
import { NodejsIcon } from "@/components/core/icons/NodejsIcon";

export type SkillItem = {
  name: string;
  icon: React.ComponentType<IconProps>;
  iconProps: IconProps;
};

export const projects = [
  {
    id: 1,
    title: "Vision Board Generator",
    url: "https://vision-board-generator-nextjs.vercel.app/",
    year: 2025,
  },
  {
    id: 2,
    title: "Book Search App",
    url: "https://book-search-react-python.vercel.app/",
    year: 2025,
  },
  {
    id: 3,
    title: "Todo App",
    url: "https://todo-app-react-nodejs.vercel.app/",
    year: 2025,
  },
];

export const skills: SkillItem[] = [
  { name: "React", icon: ReactIcon, iconProps: { size: "lg" } },
  { name: "TypeScript", icon: TypescriptIcon, iconProps: { size: "lg" } },
  { name: "JavaScript", icon: JavascriptIcon, iconProps: { size: "lg" } },
  { name: "Next.js", icon: NextjsIcon, iconProps: { size: "lg" } },
  { name: "TailwindCSS", icon: TailwindIcon, iconProps: { size: "lg" } },
  { name: "Node.js", icon: NodejsIcon, iconProps: { size: "lg" } },
  { name: "Java", icon: JavaIcon, iconProps: { size: "lg" } },
  { name: "PostgresSQL", icon: PostgresIcon, iconProps: { size: "lg" } },
];
