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
  return (
    <>
      <Head>
        <title>Stian Strand Frontend Developer</title>
        <meta
          name="description"
          content="My name is Stian, and I am a frontend developer based in Bodø. I love making great user experiences while writing maintainable code."
        />
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
    space: "g44epc9vhpwk",
    accessToken: "U3Yme6joam-hSU63dX_7-ckwy9wjd2gOhPprbDvLwS0",
  });
  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res.items,
    },
  };
};
