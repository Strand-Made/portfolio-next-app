import Image from "next/image";

const ProjectImage = ({ project }) => {
  const { image } = project.fields;
  return (
    <div className="card-image">
      <Image
        className="rounded-2xl"
        src={"https:" + image.fields.file.url}
        alt={"screenshot of" + project.fields.title}
        layout="fill"
      />
    </div>
  );
};

export default ProjectImage;
