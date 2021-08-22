const Card = ({ children, id }) => {
  return (
    <li key={id} className="card">
      {children}
    </li>
  );
};

export default Card;
