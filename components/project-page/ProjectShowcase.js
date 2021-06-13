import Image from "next/image";
import Button from "../Button";
import { FiGithub } from "react-icons/fi";

const ProjectShowcase = ({ image, url, github }) => {
  return (
    <div className="w-full md:w-9/12 max-w-2xl">
      <div className="shadow-lg rounded-2xl w-full">
        <Image
          className="rounded-2xl w-full"
          src={image}
          width={400}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="flex justify-end mt-2 mb-4">
        {url ? <Button variant="primary" href={url} text="Website" /> : null}

        <Button
          variant="outlined-gray"
          href={github}
          text="Code"
          icon={<FiGithub className="text-xl" />}
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;
