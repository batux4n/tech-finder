import { useState } from "react";
import TechSearchBar from "./components/TechSearchBar/TechSearchBar";
import ProjectSearchBar from "./components/ProjectSearchBar/ProjectSearchBar";
import TechList from "./components/TechList/TechList";
import ProjectList from "./components/ProjectList/ProjectList";
import { techData } from "./data";
import { projectData } from "./projectData";
import "./App.css";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>("");

  const handleTechSearch = (query: string) => {
    const filteredTechs = Object.keys(techData)
      .filter((tech) => tech.toLowerCase().includes(query.toLowerCase())) // Match
      .flatMap((tech) => techData[tech] || []); // Select
    setSelectedTechs(filteredTechs); // Update
  };

  const handleProjectSearch = (query: string) => {
    const match = Object.keys(projectData).find((key) =>
      key.toLowerCase().includes(query.toLowerCase()) // Match
    );
    setSelectedProject(match || ""); // Update
  };

  return (
    <div className="app-container">
      <div className="columns">
        <div className="column">
          <h2>What Type of Application Will You Build?</h2>
          <ProjectSearchBar onProjectSearch={handleProjectSearch} /> {/* Search */}
          <ProjectList project={selectedProject} /> {/* List */}
        </div>

        <div className="column">
          <h2>Add the Technologies You'll Use</h2>
          <TechSearchBar onSearch={handleTechSearch} /> {/* Search */}
          <TechList techs={selectedTechs} /> {/* List */}
        </div>
      </div>
    </div>
  );
}

export default App;
