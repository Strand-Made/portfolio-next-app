const AboutCardContent = ({ cardType }) => {
  if (cardType === "code") {
    return (
      <>
        <h3 className="text-center font-bold text-gray-2 text-lg">Languages</h3>
        <p></p>
        <ul className="flex mb-3">
          <li>Javascript,</li>
          <li> CSS,</li>
          <li>HTML &</li>
          <li>Sass</li>
        </ul>
        <h3 className="text-center font-bold text-gray-2 text-lg">Dev Tools</h3>
        <ul className="text-center">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Github</li>
          <li>Browser DevTools</li>
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
        <ul className="text-center">
          <li>Figma</li>
          <li>Adobe xD</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
          <li>Wireframes</li>
        </ul>
      </>
    );
  }
};

export default AboutCardContent;
