import Image from "next/image";
import Navbar from "../../../components/navbar/Navbar";
import ProjectContainer from "../../../components/project-page/ProjectContainer";
import ProjectDescription from "../../../components/project-page/ProjectDescription";
import ProjectShowcase from "../../../components/project-page/ProjectShowcase";
import Footer from "../../../components/Footer";
import Container from "../../../components/Container";
import Wrapper from "../../../components/Wrapper";
import { server } from "../../../config";

const Project = ({ project }) => {
  console.log;
  return (
    <>
      <Wrapper>
        <Navbar />
        <Container>
          <ProjectContainer>
            <ProjectShowcase image={project.image} />
            <ProjectDescription
              title={project.title}
              description={project.description}
            />
          </ProjectContainer>
        </Container>

        <Footer />
      </Wrapper>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`);
  const project = await res.json();
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();
  const ids = projects.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default Project;
