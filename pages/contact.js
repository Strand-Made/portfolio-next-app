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
        <title> Strand | Contact me</title>
        <meta
          name="description"
          content="Want help with a website or a quick chat? Don't hesitate to contact me."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
