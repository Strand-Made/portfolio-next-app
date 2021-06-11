const AboutCardContent = ({ cardType }) => {
  if (cardType === "code") {
    return (
      <>
        <h3 className="text-center font-bold text-gray-2 text-lg">Languages</h3>
        <ul className="flex mb-3">
          <li>Javascript,</li>
          <li> CSS,</li>
          <li>HTML &</li>
          <li>Sass</li>
        </ul>
        <h3 className="text-center font-bold text-gray-2 text-lg">Dev Tools</h3>
        <ul>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Github</li>
        </ul>
      </>
    );
  }
  if (cardType === "design") {
    return (
      <>
        <h3 className="text-center font-bold text-gray-2 text-lg">
          Design tools
        </h3>
        <ul>
          <li>Figma</li>
          <li>Adobe xD</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Github</li>
        </ul>
      </>
    );
  }
};

export default AboutCardContent;
