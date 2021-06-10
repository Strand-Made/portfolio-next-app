const FormInputs = ({ id, name }) => {
  return (
    <input
      name={name}
      className="text-gray-3 w-full rounded-lg py-1 border border-gray-5 
        hover:border-indigo-2 focus:border-indigo-3 hover:border-2 focus:ring focus:ring-indigo-2 outline-none"
      id={id}
      type="text"
    />
  );
};

export default FormInputs;
