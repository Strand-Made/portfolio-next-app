import { useRouter } from "next/router";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer";
import Wrapper from "../../../components/Wrapper";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Wrapper>
        <Navbar />
        <h1>Project: {id}</h1>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Project;
