const FormTextArea = ({ label, id }) => {
  return (
    <>
      <label className="font-body text-sm " htmlFor={id}>
        {label}
      </label>
      <textarea
        rows="5"
        cols="33"
        className="font-body p-2 text-sm rounded-lg max-w-sm py-1 border border-gray-4"
        placeholder="A sweet message"
        id={id}
      ></textarea>
    </>
  );
};

export default FormTextArea;
