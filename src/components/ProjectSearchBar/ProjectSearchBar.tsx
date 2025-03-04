import { useState } from "react";

interface ProjectSearchBarProps {
  onProjectSearch: (query: string) => void;
}

const ProjectSearchBar: React.FC<ProjectSearchBarProps> = ({ onProjectSearch }) => {
  const [projectInput, setProjectInput] = useState("");

  const handleProjectSearch = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (projectInput.trim()) {
      onProjectSearch(projectInput);
      setProjectInput("");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Örneğin: Blog, E-Ticaret"
        value={projectInput}
        onChange={(e) => setProjectInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleProjectSearch(e)}
      />
      <button className="send-button" onClick={(e) => handleProjectSearch(e)}>
        Ara
      </button>
    </div>
  );
};

export default ProjectSearchBar;
