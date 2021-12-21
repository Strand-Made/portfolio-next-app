const ProjectContainer = ({ children }) => {
  return (
    <div className="flex flex-col my-5 lg:flex-row items-center">
      {children}
    </div>
  );
};

export default ProjectContainer;
