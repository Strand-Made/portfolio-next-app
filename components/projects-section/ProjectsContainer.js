import Container from "../Container";

const ProjectsContainer = ({ children }) => {
  return (
    <section id="section" className="bg-indigo-5 w-full mt-7 py-5 text-gray-1">
      <Container>{children}</Container>
    </section>
  );
};

export default ProjectsContainer;
