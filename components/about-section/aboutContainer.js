import Container from "../Container";
const AboutContainer = ({ children }) => {
  return (
    <section className="bg-indigo-1 w-full mt-7 py-5 h-72 text-gray-1">
      <Container>{children}</Container>
    </section>
  );
};

export default AboutContainer;
