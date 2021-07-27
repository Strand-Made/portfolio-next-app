import Container from "../Container";
import SocialCard from "./SocialCard";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const SocialSection = () => {
  return (
    <Container>
      <div className="flex flex-row w-full items-center justify-center">
        <SocialCard
          title="Visit my Github"
          icon={<IoLogoGithub className="text-8xl" />}
          href="https://www.github.com/Strand-Made/"
        ></SocialCard>
        <SocialCard
          title="Visit my Linkedin"
          icon={<IoLogoLinkedin className="text-8xl" />}
          href="https://www.linkedin.com/in/stian-strand-877b9913b/"
        ></SocialCard>
      </div>
    </Container>
  );
};

export default SocialSection;
