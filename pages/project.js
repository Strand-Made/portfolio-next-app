import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ProjectContainer from "../components/project-page/ProjectContainer";

export default function Project() {
  return (
    <>
      <Head>
        <title>Project</title>
        <meta
          name="description"
          content="My name is Stian, and I am a frontend developer based in Bodø. This is my portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <ProjectContainer />
      </Container>
      <Footer />
    </>
  );
}
