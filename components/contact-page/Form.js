import FormGroup from "./FormGroup";
import FormInputs from "./FormInputs";
import FormTextArea from "./FormTextArea";

const Form = () => {
  return (
    <form className="flex flex-col mt-3 w-full rounded-lg shadow-xl h-auto p-2 bg-gray-1">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-3xl text-gray-3 mb-3">Send me a message</h1>
        <p className="text-base font-body text-gray-3">
          Feel free to get in touch with me for anything work related or just
          for a quick chat.
        </p>
      </div>
      <FormGroup>
        <FormInputs id="name" label="Name" />
      </FormGroup>
      <FormGroup>
        <FormInputs id="email" label="Email" />
      </FormGroup>
      <FormGroup>
        <FormTextArea id="message" label="Subject" />
      </FormGroup>
    </form>
  );
};

export default Form;
