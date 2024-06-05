import { RefObject } from "react";
import { CgMoon, CgSun } from "react-icons/cg";
import { FaHouse, FaScrewdriverWrench, FaRegPaperPlane } from "react-icons/fa6";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToHome: RefObject<HTMLDivElement>;
  scrollToProjects: RefObject<HTMLDivElement>;
  scrollToContacts: RefObject<HTMLDivElement>;
}

const Navbar = ({
  darkMode,
  toggleDarkMode,
  scrollToHome,
  scrollToProjects,
  scrollToContacts,
}: NavbarProps) => {
  return (
    <div className="nav">
      <button
        className="border-2 border-gray-950 bg-gray-950 p-2 m-2 absolute z-10 rounded-full dark:bg-white"
        onClick={toggleDarkMode}
      >
        {!darkMode ? <CgMoon color="white" /> : <CgSun />}
      </button>

      <div className="bg-gray-50 dark:bg-[#141414] dark:text-gray-200 flex flex-row gap-4 justify-center p-3 ">
        <button
          onClick={() => {
            scrollToHome.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xl hover:text-blue-300 flex gap-2 items-center"
        >
          <FaHouse size={22} /> Home
        </button>
        <button
          onClick={() => {
            scrollToProjects.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xl hover:text-blue-300 flex gap-2 items-center"
        >
          <FaScrewdriverWrench size={22} /> Projects
        </button>
        <button
          onClick={() => {
            scrollToContacts.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xl hover:text-blue-300 flex gap-2 items-center"
        >
          <FaRegPaperPlane /> Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
