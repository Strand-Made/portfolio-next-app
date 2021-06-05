const FormInputs = ({ id, label }) => {
  return (
    <>
      <label htmlFor={id} className="font-body text-sm">
        {label}
      </label>
      <input
        className="font-body text-base text-gray-3 w-full rounded-lg max-w-sm py-1 border border-gray-4"
        id={id}
        type="text"
      />
    </>
  );
};

export default FormInputs;
