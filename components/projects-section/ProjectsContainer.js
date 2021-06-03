import Container from "../Container";

const ProjectsContainer = ({ children }) => {
  return (
    <section className="bg-indigo-2 w-full mt-7 text-gray-1">
      <Container>{children}</Container>
    </section>
  );
};

export default ProjectsContainer;