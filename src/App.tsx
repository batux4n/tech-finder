import { useState } from "react";
import TechSearchBar from "./components/TechSearchBar/TechSearchBar";
import ProjectSearchBar from "./components/ProjectSearchBar/ProjectSearchBar";
import TechList from "./components/TechList/TechList";
import ProjectList from "./components/ProjectList/ProjectList";
import { techData } from "./data";
import { projectData } from "./projectData";
import "./App.css";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]); // State
  const [selectedProject, setSelectedProject] = useState<string>(""); // State

  const handleTechSearch = (query: string) => {
    const filteredTechs = Object.keys(techData)
      .filter((tech) => tech.toLowerCase().includes(query.toLowerCase())) // Filtre
      .flatMap((tech) => techData[tech] || []); // Teknolojiler
    setSelectedTechs(filteredTechs); // Güncelleme
  };

  const handleProjectSearch = (query: string) => {
    const match = Object.keys(projectData).find((key) =>
      key.toLowerCase().includes(query.toLowerCase()) // Eşleşme
    );
    setSelectedProject(match || ""); // Güncelleme
  };

  return (
    <div className="app-container">
      <div className="columns">
        <div className="column">
          <h2>Ne Tür Bir Uygulama Yapacaksınız?</h2>
          <ProjectSearchBar onProjectSearch={handleProjectSearch} /> {/* Proje arama */}
          <ProjectList project={selectedProject} /> {/* Proje listesi */}
        </div>

        <div className="column">
          <h2>Kullanacağınız Araçları Ekleyin</h2>
          <TechSearchBar onSearch={handleTechSearch} /> {/* Teknoloji arama */}
          <TechList techs={selectedTechs} /> {/* Teknoloji listesi */}
        </div>
      </div>
    </div>
  );
}

export default App;
