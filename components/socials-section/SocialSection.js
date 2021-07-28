import Container from "../Container";
import SocialCard from "./SocialCard";
import SocialCardIcon from "./SocialCardIcon";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io";

const SocialSection = () => {
  return (
    <Container>
      <div className="flex flex-col w-full items-center justify-center">
        <SocialCard
          heading={
            <h3 className="text-xl text-center font-bold text-gray-1">
              Get in touch on
            </h3>
          }
        >
          <SocialCardIcon icon={<IoLogoLinkedin />} href="www.linkedin.com" />
          <SocialCardIcon
            icon={<IoLogoGithub />}
            href="www.github.com/Strand-Made"
          />
          <SocialCardIcon icon={<IoLogoFacebook />} href="www.facebook.com/" />
          <SocialCardIcon icon={<IoLogoTwitter />} href="www.twitter.com" />
        </SocialCard>
      </div>
    </Container>
  );
};

export default SocialSection;
