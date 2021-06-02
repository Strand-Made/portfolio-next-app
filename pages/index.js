import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import HeroComponent from "../components/hero-section/heroComponent";
import AboutSection from "../components/about-section/aboutSection";

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
      <AboutSection></AboutSection>
    </>
  );
}
