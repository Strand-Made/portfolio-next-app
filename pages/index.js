import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import HeroComponent from "../components/hero-section/HeroComponent";
import AboutSection from "../components/about-section/AboutSection";
import ProjectsSection from "../components/projects-section/ProjectsSection";
import SocialSection from "../components/socials-section/SocialSection";
import Footer from "../components/Footer";

export default function Home() {
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
      <Navbar />
      <HeroComponent />
      <AboutSection />
      <ProjectsSection />
      <SocialSection />
      <Footer />
    </>
  );
}
