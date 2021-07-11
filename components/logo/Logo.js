import Link from "next/link";

const Logo = ({ href, theme }) => {
  const logoText = "Strand";
  const styles = `text-2xl md:text-3xl font-display font-bolder ${
    theme === "regular" ? "text-indigo-3" : "text-gray-1"
  }`;
  return (
    <Link href={href}>
      <a className={styles}>{logoText}</a>
    </Link>
  );
};

export default Logo;
