import ProjectShowcase from "./ProjectShowcase";
import ProjectDescription from "./ProjectDescription";
const projectContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <ProjectShowcase />
      <ProjectDescription />
    </div>
  );
};

export default projectContainer;
