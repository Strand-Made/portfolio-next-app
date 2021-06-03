import Link from "next/link";

const SocialCard = ({ title, icon, link }) => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-gray-3 rounded-md text-gray-1 text-base shadow-md my-3 mx-1 w-1/2 h-40">
      <h4>{title}</h4>
      <div>{icon}</div>
      <div className="self-end">
        <Link href={link}>
          <a className="block self-start font-body text-center w-20 mx-2 border rounded-full py-1 hover:bg-gray-1 hover:text-gray-3">
            Visit
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialCard;
