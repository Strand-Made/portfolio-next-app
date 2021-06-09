import Button from "../Button";

const SocialCard = ({ title, icon, href }) => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-gray-4 rounded-md text-gray-1 text-base shadow-md my-3 mx-1 w-1/2 max-w-xs h-44">
      <h4 className="text-lg">{title}</h4>
      <div>{icon}</div>
      <div className="self-end">
        <Button variant="outlined" href={href} text="Visit" />
      </div>
    </div>
  );
};

export default SocialCard;
