import Image from "next/image";
import Button from "../Button";

const ProjectShowcase = () => {
  return (
    <div className="w-9/12">
      <div>
        <Image
          className="rounded-2xl"
          src="/exampleWebsite.jpg"
          width={350}
          height={280}
        />
      </div>
      <div className="flex justify-end mb-4">
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
