import { server } from "../config";
import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Wrapper from "../components/Wrapper";
import HeroComponent from "../components/hero-section/HeroComponent";
import AboutSection from "../components/about-section/AboutSection";
import ProjectsSection from "../components/projects-section/ProjectsSection";
import SocialSection from "../components/socials-section/SocialSection";
import Footer from "../components/Footer";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Bango Frontend Portfolio</title>
        <meta
          name="description"
          content="My name is Stian, and I am a frontend developer based in Bodø. This is my portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Navbar />
        <HeroComponent />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SocialSection />
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
