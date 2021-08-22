import Badge from "./Badge";
const ProjectDescription = ({ title, description, tags }) => {
  return (
    <div className="flex flex-col w-full max-w-2xl items-center h-auto  lg:ml-5 xl:h-96 rounded-lg p-2">
      <div className="flex-grow">
        <h2 className="capitalize  text-center mb-2">about this project</h2>
        <p className="max-w-prose">{description}</p>
        <div>
          <h3 className="text-center font-bold">Tags</h3>
          <div className="flex justify-center mt-2">
            <ul className="flex flex-wrap justify-center max-w-xs">
              {tags.map((tag) => {
                return <Badge key={tag}>{tag}</Badge>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
