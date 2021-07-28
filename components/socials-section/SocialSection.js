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
          <SocialCardIcon
            icon={<IoLogoLinkedin />}
            href="https://www.linkedin.com/in/stian-strand-877b9913b"
          />
          <SocialCardIcon
            icon={<IoLogoGithub />}
            href="https://www.github.com/Strand-Made"
          />
          <SocialCardIcon
            icon={<IoLogoFacebook />}
            href="https://www.facebook.com/stian.strand1"
          />
          <SocialCardIcon
            icon={<IoLogoTwitter />}
            href="https://www.twitter.com/stianstrand3"
          />
        </SocialCard>
      </div>
    </Container>
  );
};

export default SocialSection;
