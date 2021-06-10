const InputLabel = ({ id, label }) => {
  return (
    <label htmlFor={id} className="self-start">
      {label}
    </label>
  );
};

export default InputLabel;
