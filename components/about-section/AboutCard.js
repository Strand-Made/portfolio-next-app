const AboutCard = ({ icon, title, content }) => {
  return (
    <div className="flex bg-gray-1 my-2 md:mx-2 flex-col items-center h-96  w-2/3 max-w-xs rounded-lg py-5 px-2 shadow-lg">
      <div className="flex flex-col items-center mb-3">
        {icon}
        <h2 className="text-indigo-3 text-2xl">{title}</h2>
      </div>
      {content}
    </div>
  );
};

export default AboutCard;
