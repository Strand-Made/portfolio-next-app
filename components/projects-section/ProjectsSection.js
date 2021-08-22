import ContactBox from "./ContactBox";
import ProjectsContainer from "./ProjectsContainer";
import Card from "../card/Card";
import ProjectImage from "../card/ProjectImage";
import CardBody from "../card/CardBody";

const ProjectsSection = ({ projects }) => {
  return (
    <ProjectsContainer>
      <h3 className="text-center capitalize text-gray-1 font-bold text-4xl">
        featured projects
      </h3>
      <ul className="flex flex-col items-center w-full  my-5 gap-4 ">
        {projects.map((project) => (
          <Card id={project.sys.id}>
            <CardBody
              github={project.fields.github}
              title={project.fields.title}
              text={project.fields.shortDesc}
              link={project.sys.id}
              tags={project.fields.tags}
            />
            <ProjectImage project={project} />
          </Card>
        ))}
      </ul>
      <ContactBox />
    </ProjectsContainer>
  );
};

export default ProjectsSection;
