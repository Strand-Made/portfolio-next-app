import Head from "next/head";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { IoIosCheckmarkCircle } from "react-icons/io";

const successMail = () => {
  return (
    <>
      <Head>
        <title>Message sent | Bango Portfolio</title>
        <meta
          name="description"
          content="Message sent! I will contact you as fast as I can."
        />
      </Head>
      <Wrapper>
        <Navbar />
        <Container>
          <main>
            <div className="flex flex-col mt-3 w-full justify-center rounded-lg shadow-xl h-96 p-2 bg-gray-1">
              <div className="flex flex-col items-center px-4">
                <h1 className="text-3xl text-gray-3 mb-3">Message Sent!</h1>
                <IoIosCheckmarkCircle className="text-5xl fill-current text-yellow-cta " />
                <p className="text-2xl text-gray-3 my-2 ">
                  I will reply as quick as I can...
                </p>
                <p className="my-2">In the mean time</p>
                <Link href="/#projects">
                  <a className="block bg-pink-cta text-pink-white font-body text-base text-center shadow-md py-1 px-2 rounded-full">
                    Check out my projects
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
};

export default successMail;
