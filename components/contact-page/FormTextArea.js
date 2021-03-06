const FormTextArea = ({ label, id, name }) => {
  return (
    <textarea
      name={name}
      rows="5"
      cols="33"
      className="font-body p-2 text-sm rounded-lg w-full max-w-lg py-1 border border-gray-5 resize-none outline-none border border-gray-5 
        hover:border-indigo-2 focus:border-indigo-3 hover:border-2 focus:ring focus:ring-indigo-2 outline-none"
      placeholder="A sweet message"
      id={id}
    ></textarea>
  );
};

export default FormTextArea;
