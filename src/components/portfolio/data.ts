export const EMAIL = "omarahmedmashour@gmail.com";
export const PHONE = "+20 109 074 5097";
export const LOCATION = "Zagazig, El Sharkia, Egypt";

export const LINKEDIN = "https://www.linkedin.com/in/omar-ahmed-18b837428";
export const GITHUB = "https://github.com/0OmarAhmedMashour0";

import blogImg from "@/assets/proj-blog.jpg";
import cpuImg from "@/assets/proj-cpu.jpg";
import gameImg from "@/assets/proj-game.jpg";
import fitmateImg from "@/assets/proj-fitmate.jpg";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repo: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "FitMate",
    description:
      "An MVP health and fitness platform bridging the gap between personal trainers and trainees, featuring customized workout routines, diet plans, and daily macro tracking.",
    image: fitmateImg,
    tags: ["React", "Vite", "Bootstrap 5", "json-server-auth", "React Router v7"],
    repo: "https://github.com/0OmarAhmedMashour0/FitMate",
  },
  {
    title: "Simple Blog Application",
    description:
      "Full-stack blog platform built during the ITI training, with secure user authentication, post management and a clean content dashboard.",
    image: blogImg,
    tags: ["PHP", "Laravel", "MySQL", "HTML/CSS"],
    repo: "https://github.com/0OmarAhmedMashour0/project_iti",
  },
  {
    title: "MIPS 32-bit Multi-cycle Processor",
    description:
      "Designed and simulated a fully functional MIPS 32-bit multi-cycle processor, covering datapath, control unit and instruction execution.",
    image: cpuImg,
    tags: ["VHDL", "Computer Architecture", "Simulation"],
    repo: "https://github.com/0OmarAhmedMashour0/MIPS-32-bit-Multi-cycle-Processor",
  },
  {
    title: '"Digging Jim" Desktop Game',
    description:
      "Interactive 2D desktop game built with JavaFX, applying core OOP principles across game entities, collision handling and level logic.",
    image: gameImg,
    tags: ["Java", "JavaFX", "OOP"],
    repo: GITHUB,
  },
];
