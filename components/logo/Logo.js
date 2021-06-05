import Link from "next/link";

const Logo = ({ href, theme }) => {
  if (theme === "regular") {
    return (
      <Link href={href}>
        <a className="text-3xl font-display text-indigo-3 font-bolder">Bango</a>
      </Link>
    );
  } else if (theme === "white") {
    return (
      <Link href={href}>
        <a className="text-3xl font-display text-gray-1 font-bolder">Bango</a>
      </Link>
    );
  } else {
    throw "Please use regular or white in theme ";
  }
};

export default Logo;
