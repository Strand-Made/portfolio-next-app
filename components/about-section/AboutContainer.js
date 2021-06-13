import Container from "../Container";
import Image from "next/image";
const AboutContainer = ({ children }) => {
  return (
    <section className="bg-indigo-1 w-full mt-7 py-5 h-72 md:h-80 lg:h-96 text-gray-1">
      <Container>{children}</Container>
    </section>
  );
};

export default AboutContainer;
