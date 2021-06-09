import ProjectShowcase from "./ProjectShowcase";
import ProjectDescription from "./ProjectDescription";
const projectContainer = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center">{children}</div>
  );
};

export default projectContainer;
