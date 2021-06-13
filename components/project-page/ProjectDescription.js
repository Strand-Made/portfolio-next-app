import Badge from "./Badge";
const ProjectDescription = ({ title, description, tags }) => {
  return (
    <div className="flex flex-col w-full max-w-2xl items-center shadow bg-gray-1 h-auto  lg:ml-5 xl:h-96 rounded-lg p-2">
      <h1 className="text-gray-3 font-sans font-bold">{title}</h1>
      <div className="flex-grow">
        <p className="max-w-prose">{description}</p>
      </div>
      <div className="flex justify-center mt-5">
        <div>
          <h3 className="text-center font-bold">Tags</h3>
          <ul className="flex flex-wrap justify-center max-w-xs">
            {tags.map((tag) => {
              return <Badge key={tag}>{tag}</Badge>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
