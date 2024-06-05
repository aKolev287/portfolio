import { useState, useRef } from "react";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import FrontPage from "./pages/FrontPage";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToHome = useRef<HTMLDivElement>(null);
  const scrollToProjects = useRef<HTMLDivElement>(null);
  const scrollToContacts = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          scrollToHome={scrollToHome}
          scrollToProjects={scrollToProjects}
          scrollToContacts={scrollToContacts}
        />

        <div className="bg-gray-50 dark:bg-[#141414] dark:text-gray-200 min-h-screen ">
          <div className="container mx-auto py-20">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center">
                <div ref={scrollToHome}>
                  <FrontPage />
                </div>

                <div ref={scrollToProjects}>
                  <Projects />
                </div>

                <div ref={scrollToContacts}>
                  <Contacts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
