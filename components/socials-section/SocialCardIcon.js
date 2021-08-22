import Link from "next/link";
const SocialCardIcon = ({ icon, href }) => {
  return (
    <Link href={href}>
      <a
        className="border-2  transition-colors duration-150
         ease-linear text-4xl text-indigo-1 border-indigo-3 rounded-full hover:border-indigo-2 p-2"
      >
        {icon}
      </a>
    </Link>
  );
};

export default SocialCardIcon;
