import { projectData } from "../../projectData";

interface TechListProps {
  techs: string[];
  project: string;
}

const TechList: React.FC<TechListProps> = ({ techs, project }) => {
  return (
    <div className="results-container">
      <div className="tech-list">
        <h3>Önerilen Teknolojiler:</h3>
        <ul>
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {project && projectData[project] && (
        <div className="project-list">
         
          <ul>
            {projectData[project].map((item, index) => (
              <li key={index}>
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TechList;
