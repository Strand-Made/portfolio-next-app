import Link from "next/link";
const SocialCardIcon = ({ icon, href }) => {
  return (
    <Link href={href}>
      <a
        className="border-2  transition-colors duration-150
         ease-linear text-4xl text-gray-1 border-pink-white rounded-full hover:border-indigo-2 p-2"
      >
        {icon}
      </a>
    </Link>
  );
};

export default SocialCardIcon;
