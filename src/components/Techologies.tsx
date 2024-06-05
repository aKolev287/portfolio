import TechSquare from "./TechSquare";
import {
  FaPython,
  FaJs,
  FaGolang,
  FaLinux,
  FaGitAlt,
  FaReact,
  FaDocker,
  FaWindows,
} from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiDjango, SiPostgresql } from "react-icons/si";

const Techologies = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-gray-800 dark:text-gray-300 text-xl pb-3 font-semibold">
          Languages
        </p>
        <div className="flex gap-3">
          <TechSquare icon={<FaPython size={28} />} />
          <TechSquare icon={<FaJs size={28} />} />
          <TechSquare icon={<FaGolang size={28} />} />
        </div>
      </div>

      <div>
        <p className="text-gray-800 dark:text-gray-300 text-xl pb-3 font-semibold">
          Frameworks
        </p>
        <div className="flex gap-3">
          <TechSquare icon={<FaReact size={28} />} />
          <TechSquare icon={<SiTailwindcss size={28} />} />
          <TechSquare icon={<SiDjango size={28} />} />
        </div>
      </div>

      <div>
        <p className="text-gray-800 dark:text-gray-300 text-xl pb-3 font-semibold">
          Databases
        </p>
        <div className="flex gap-3">
          <TechSquare icon={<IoLogoFirebase size={28} />} />
          <TechSquare icon={<SiPostgresql size={28} />} />
        </div>
      </div>

      <div>
        <p className="text-gray-800 dark:text-gray-300 text-xl pb-3 font-semibold">
          Other
        </p>
        <div className="flex gap-3">
          <TechSquare icon={<FaLinux size={28} />} />
          <TechSquare icon={<FaWindows size={28} />} />
          <TechSquare icon={<FaGitAlt size={28} />} />
          <TechSquare icon={<FaDocker size={28} />} />
        </div>
      </div>
    </div>
  );
};

export default Techologies;
