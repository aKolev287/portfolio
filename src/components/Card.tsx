import { FaLink, FaGithub } from "react-icons/fa6";

type CardPropsTypes = {
  title: string;
  tag: string;
  description: string;
  tech: Array<string>;
  link: string;
  demoLink: string;
};

const Card = ({
  title,
  tag,
  description,
  tech,
  link,
  demoLink,
}: CardPropsTypes) => {
  return (
    <div className="bg-gray-100 dark:bg-[#141414] dark:border-gray-600 border-[1px] rounded-xl shadow-lg flex flex-col max-w-[57.5rem]  my-3">
      <div className="flex flex-col p-3">
        <div className=" flex justify-between items-baseline">
          <h1 className="font-roboto text-2xl max-sm:text-xl">{title}</h1>
          <div className="flex gap-3">
            {demoLink != "" ? <FaLink size={22} /> : <></>}

            <a href={link} target="_blank">
              <FaGithub size={22} className="cursor-pointer" />
            </a>
          </div>
        </div>

        <p className="text-gray-400 max-sm:text-md">#{tag}</p>
      </div>
      <div className="flex px-3">
        <p className="font-roboto">{description}</p>
      </div>
      <div className="grid grid-cols-7 max-sm:grid-cols-3 max-md:grid-cols-3 text-center gap-1 p-3 max-sm:p-3 text-gray-200">
        {tech.map((name) => (
          <div
            key={name}
            className={`rounded-xl ${
              name == "Django"
                ? "bg-green-700"
                : name == "React"
                ? "bg-cyan-400"
                : name == "Firebase"
                ? "bg-orange-500"
                : name == "Rust"
                ? "bg-orange-900"
                : name == "TailwindCSS"
                ? "bg-cyan-800"
                : name == "JavaScript"
                ? "bg-yellow-500"
                : name == "Python"
                ? "bg-blue-600"
                : name == "TypeScript"
                ? "bg-blue-800"
                : "bg-blue-950"
            } w-auto mr-1 font-roboto font-semibold max-sm:text-sm`}
          >
            <p className="py-1">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
