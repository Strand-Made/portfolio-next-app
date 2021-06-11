import Image from "next/image";
import Button from "../Button";
import { FiGithub } from "react-icons/fi";

const ProjectShowcase = ({ image, url }) => {
  return (
    <div className="w-9/12">
      <div className="shadow-lg rounded-2xl">
        <Image
          className="rounded-2xl"
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
          href="https://github.com"
          text="Code"
          icon={<FiGithub className="text-xl" />}
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;
