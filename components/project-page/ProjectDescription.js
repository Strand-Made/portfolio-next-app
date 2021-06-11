const ProjectDescription = ({ title, description }) => {
  return (
    <div className="flex flex-col w-full max-w-2xl items-center shadow bg-gray-1 h-64 xl:h-96 lg:ml-5 rounded-lg p-2">
      <h1 className="text-gray-3 font-sans font-bold">{title}</h1>
      <div className="flex-grow">
        <p className="max-w-prose">{description}</p>
      </div>
      <div className="flex justify-between mt-5 w-52">
        <div>
          <h3 className="font-bold">Tools</h3>
        </div>
        <div>
          <h3 className="font-bold">Tags</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
