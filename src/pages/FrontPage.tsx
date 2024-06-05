import Socials from "../components/Socials";
import Techologies from "../components/Techologies";
import {
  FaCircleNodes,
  FaCode,
  FaAngleDown,
  FaAngleUp,
  FaClipboardCheck,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";
import { useCollapse } from "react-collapsed";
import { useEffect, useState } from "react";
import { certificatesList } from "../config/imageQueue";


const FrontPage = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [next, setNext] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNext((prevNext) => {
        const newNext = (prevNext + 1) % certificatesList.length;
        return newNext;
      });
    }, 8000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [certificatesList.length]);

  const handlePrevious = () => {
    setNext(
      (prevNext) =>
        (prevNext - 1 + certificatesList.length) % certificatesList.length
    );
  };

  const handleNext = () => {
    setNext((prevNext) => (prevNext + 1) % certificatesList.length);
  };

  return (
    <div className="max-sm:m-4">
      <p className="text-xl pb-2 text-blue-600 dark:text-blue-300">
        Hello! My name is
      </p>
      <h1 className="font-roboto text-5xl font-extrabold">Aleksandar Kolev</h1>
      <p className="text-gray-800 dark:text-gray-300 text-xl pt-3">
        I'm a web developer specializing in both back and front end development,
        with a focus on building APIs.
      </p>
      <p
        className="text-gray-800 dark:text-gray-300 text-xl py-3"
        {...getCollapseProps()}
      >
        Idk what else to write here atm :D
      </p>
      <div {...getCollapseProps()}>
        <div className="flex flex-row gap-3 items-baseline">
          <FaClipboardCheck size={28} />
          <h3 className="font-roboto text-4xl mb-3 font-extrabold">
            Certificates
          </h3>
        </div>
        <div className="flex justify-between">
          <button onClick={handlePrevious}>
            <FaAngleLeft className="mx-2 " size={28} />
          </button>
          <a href={`${certificatesList[next].link}`} target="_blank">
            <img
              src={`./${certificatesList[next].imageName}`}
              alt={`./${certificatesList[next].imageAlt}`}
              className={`${
                certificatesList[next].type === "Udemy"
                  ? "w-[500px]"
                  : "w-[360px]"
              }`}
            />
          </a>
          <button onClick={handleNext}>
            <FaAngleRight className="mx-2 " size={28} />
          </button>
        </div>
      </div>

      <p
        className={`text-gray-800 dark:text-gray-300 text-xl pt-3 flex justify-center items-end ${
          isExpanded ? "" : "animate-bounce"
        } font-bold cursor-pointer`}
      >
        {isExpanded ? (
          <FaAngleUp className="mx-2 " size={24} />
        ) : (
          <FaAngleDown className="mx-2 " size={24} />
        )}
        <div {...getToggleProps()}>{isExpanded ? "Collapse" : "Expand"}</div>
        {isExpanded ? (
          <FaAngleUp className="mx-2 " size={24} />
        ) : (
          <FaAngleDown className="mx-2 " size={24} />
        )}
      </p>

      <div className="border-gray-600 border-dashed border-2 my-5"></div>
      <div className="flex flex-row gap-3 items-baseline">
        <FaCircleNodes size={28} />
        <h2 className="font-roboto text-4xl mb-3 font-extrabold">Socials</h2>
      </div>
      <Socials />
      <div className="border-gray-600 border-dashed border-2 my-5"></div>
      <div className="flex flex-row gap-3 items-baseline">
        <FaCode size={28} />
        <h3 className="font-roboto text-4xl mb-3 font-extrabold">
          Techologies
        </h3>
      </div>
      <Techologies />
      <div className="border-gray-600 border-dashed border-2 my-5"></div>
    </div>
  );
};

export default FrontPage;
