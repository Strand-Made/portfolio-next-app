import Container from "../Container";
import SocialCard from "./SocialCard";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const SocialSection = () => {
  return (
    <Container>
      <div className="flex flex-row items-center">
        <SocialCard
          title="Visit my Github"
          icon={<IoLogoGithub className="text-6xl" />}
          href="https://www.github.com"
        ></SocialCard>
        <SocialCard
          title="Visit my Linkedin"
          icon={<IoLogoLinkedin className="text-6xl" />}
          href="https://www.linkedin.com"
        ></SocialCard>
      </div>
    </Container>
  );
};

export default SocialSection;
