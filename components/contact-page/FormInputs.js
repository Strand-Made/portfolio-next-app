const FormInputs = ({ id, label, name }) => {
  return (
    <>
      <label htmlFor={id} className="font-body text-sm">
        {label}
      </label>
      <input
        name={name}
        className="font-body text-base text-gray-3 w-full rounded-lg max-w-sm py-1 border border-gray-5 
        hover:border-indigo-2 focus:border-indigo-3 hover:border-2 focus:ring focus:ring-indigo-2 outline-none"
        id={id}
        type="text"
      />
    </>
  );
};

export default FormInputs;
