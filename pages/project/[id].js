import Head from "next/head";
import { createClient } from "contentful";
import Navbar from "../../components/navbar/Navbar";
import ProjectContainer from "../../components/project-page/ProjectContainer";
import ProjectDescription from "../../components/project-page/ProjectDescription";
import ProjectShowcase from "../../components/project-page/ProjectShowcase";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_TOKEN_ID,
});

const Project = ({ project }) => {
  console.log(project);
  const { url, github, title, description, shortDesc, image, tags } =
    project.fields;
  console.log;
  return (
    <>
      <Head>
        <title>Bango | {title}</title>
        <meta name="description" content={shortDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Navbar />
        <Container>
          <ProjectContainer>
            <ProjectShowcase
              image={"https:" + image.fields.file.url}
              url={url}
              github={github}
            />
            <ProjectDescription
              tags={tags}
              title={title}
              description={description}
            />
          </ProjectContainer>
        </Container>

        <Footer />
      </Wrapper>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });
  console.log(res);
  const paths = res.items.map((item) => {
    return {
      params: { id: item.sys.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "project",
    "sys.id": params.id,
  });

  return {
    props: { project: items[0] },
  };
};

export default Project;
