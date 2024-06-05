import Card from "../components/Card";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Project {
  description: string;
  title: string;
  tag: string;
  tech: Array<string>;
  id: string;
  link: string;
  demoLink: string;
}

const Projects = () => {
  const [projectsList, setProjectsList] = useState<Project[]>([]);

  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    const getProjectsList = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjectsList(filteredData as Project[]);
      } catch (error) {
        console.error(error);
      }
    };
    getProjectsList();
  }, []);

  return (
    <div className="max-sm:mx-4">
      <div className="flex flex-row gap-3 items-baseline">
        <FaScrewdriverWrench size={28} />
        <h3 className="font-roboto text-4xl mb-3 font-extrabold">Projects</h3>
      </div>
      {projectsList.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          tag={project.tag}
          description={project.description}
          tech={project.tech}
          link={project.link}
          demoLink={project.demoLink}
        />
      ))}

      <div className="border-gray-600 border-dashed border-2 my-5"></div>
    </div>
  );
};

export default Projects;
