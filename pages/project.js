import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function Project() {
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
    <Container></Container>
    <Footer />
  </>;
}
