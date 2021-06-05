import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/Container";
import Form from "../components/contact-page/Form";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="My name is Stian, and I am a frontend developer based in Bodø. This is my portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <Form></Form>
      </Container>
      <Footer />
    </>
  );
}
