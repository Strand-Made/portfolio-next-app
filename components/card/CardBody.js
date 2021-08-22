import Button from "../Button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const CardBody = ({ title, text, link, tags, github }) => {
  return (
    <div className="card-content">
      <h4 className="text-2xl capitalize text-gray-1 py-3 font-bold ">
        {title}
      </h4>
      <div className="text-dark-cyan md:bg-gray-3 md:rounded-lg md:shadow-lg md:p-5 md:max-w-md">
        <p className="max-w-prose">{text}</p>
        <div className="btn-container">
          <Button
            href="/project[id]"
            as={`/project/${link}`}
            variant="secondary"
            text="View"
          />
        </div>
      </div>
      <ul className="flex flex-wrap space-x-2 max-w-sm">
        {tags.map((tag) => (
          <li className="text-sm font-bold text-dark-cyan">{tag}</li>
        ))}
      </ul>
      <div className="flex justify-end mt-3">
        <Link href={github}>
          <a className="inline-block w-20">
            <FiGithub fontSize="26" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardBody;
