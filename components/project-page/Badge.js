const Badge = ({ children }) => {
  return (
    <li className="mx-2 my-1 font-bold bg-indigo-1 text-gray-1 px-2 rounded-3xl">
      {children}
    </li>
  );
};

export default Badge;
