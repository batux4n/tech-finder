import { projectData } from "../../projectData";

interface ProjectListProps {
  project: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {
  if (!project || !projectData[project]) return null;

  return (
    <div className="project-list">
      <h3>"{project}" için önerilen yazılım dilleri:</h3>
      <ul>
        {projectData[project].map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
