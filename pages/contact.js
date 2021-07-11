import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Wrapper from "../components/Wrapper";
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
          content="Want help with a website or a quick chat? Don't hesitate to contact me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Navbar />
        <Container>
          <Form />
        </Container>

        <Footer />
      </Wrapper>
    </>
  );
}
