import Image from "next/image";
import Button from "../Button";

const ProjectShowcase = ({ image }) => {
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
        <Button variant="primary" href="https://linkedin.com" text="Link" />

        <Button
          variant="outlined-gray"
          href="https://github.com"
          text="Github"
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;
