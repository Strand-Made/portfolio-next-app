import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardContent from "./CardContent";

const ProjectCard = ({ project }) => {
  const { description, image } = project.fields;
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const transition = { duration: 1, ease: "easeInOut" };

  const cardDisplayVariants = {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition },
    leave: { opacity: 0, y: -100, transition },
  };
  useEffect(() => {
    if (inView) {
      controls.start("enter");
    }
    if (!inView) {
      controls.start("leave");
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      animate={controls}
      variants={cardDisplayVariants}
      key={project.sys.id}
      className="block relative rounded-2xl transition-shadow duration-700 ease-in-out 
      shadow-lg hover:shadow-sm h-72 w-full max-h-96  max-w-xs"
    >
      <Image
        className="absolute top-0 right-0 left-0 rounded-2xl"
        src={"https:" + image.fields.file.url}
        alt={"screenshot of" + project.fields.title}
        desc={description}
        layout="fill"
      />
      <CardContent project={project} />
    </motion.li>
  );
};

export default ProjectCard;
