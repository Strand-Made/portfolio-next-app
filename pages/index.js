import { server } from "../config";
import Head from "next/head";
import { createClient } from "contentful";
import Navbar from "../components/navbar/Navbar";
import Wrapper from "../components/Wrapper";
import HeroComponent from "../components/hero-section/HeroComponent";
import AboutSection from "../components/about-section/AboutSection";
import ProjectsSection from "../components/projects-section/ProjectsSection";
import SocialSection from "../components/socials-section/SocialSection";
import Footer from "../components/Footer";

export default function Home({ projects }) {
  console.log(projects);
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
        <main className="flex flex-col min-h-screen">
          <HeroComponent />
          <AboutSection />
          <ProjectsSection projects={projects} />
          <SocialSection />
        </main>
        <Footer />
      </Wrapper>
    </>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN_ID,
  });
  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res.items,
    },
  };
};
