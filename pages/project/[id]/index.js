import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer";
import Wrapper from "../../../components/Wrapper";
import { server } from "../../../config";

const Project = ({ project }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <h1>Project: {project.title}</h1>
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
