import AboutContent from "./AboutContent";
import AboutContainer from "./AboutContainer";
import AboutCard from "./AboutCard";
import AboutCardContent from "./AboutCardContent";
import Container from "../Container";
import { GiPencilRuler } from "react-icons/gi";
import { FaFileCode } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <div className="w-full ">
        <AboutContainer>
          <AboutContent />
        </AboutContainer>
        <div className="-mt-20">
          <Container>
            <div className="flex flex-col items-center">
              <AboutCard
                icon={<FaFileCode className="text-3xl text-indigo-3" />}
                title="Code"
                content={<AboutCardContent />}
              />
              <AboutCard
                icon={<GiPencilRuler className="text-3xl text-indigo-3" />}
                title="Design Tools"
                content={<AboutCardContent />}
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
