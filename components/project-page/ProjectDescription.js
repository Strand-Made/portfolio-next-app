const ProjectDescription = () => {
  return (
    <div className="flex flex-col items-center shadow bg-gray-1 rounded-lg p-2">
      <h1 className="text-3xl text-gray-3 font-bold">
        Github Search react-app
      </h1>
      <div className="maw-w-prose">
        <p className="font-body text-base text-gray-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nullam
          vitae phasellus sed ullamcorper blandit. Nibh blandit arcu lacus
          scelerisque massa. Euismod eu nisl iaculis et ipsum turpis. Nunc eu,
          sagittis sit velit et.
        </p>
      </div>
      <div className="flex justify-between mt-5 w-52">
        <div>
          <h3>Tools</h3>
        </div>
        <div>
          <h3>Tags</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
