import emailjs from "emailjs-com";
import apiKeys from "../../apiKeys";
import { useRouter } from "next/router";

import FormGroup from "./FormGroup";
import FormInputs from "./FormInputs";
import InputLabel from "./InputLabel";
import FormTextArea from "./FormTextArea";
import FormButton from "./FormButton";

const Form = () => {
  const router = useRouter();

  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          router.push("/successMail");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form
      onSubmit={sendMail}
      className="flex flex-col py-5 items-center mt-3 w-full rounded-lg shadow-xl mx-auto max-w-screen-md h-4/5 p-2 bg-gray-1"
    >
      <div className="flex flex-col items-center px-4">
        <h1 className="font-sans text-gray-3 font-bold mb-3">
          Send me a message
        </h1>
        <p className="text-gray-3 max-w-prose">
          Feel free to get in touch with me for anything work related or just
          for a quick chat.
        </p>

        <FormGroup>
          <InputLabel id="name" label="Name" />
          <FormInputs id="name" name={"name"} label="Name" />
        </FormGroup>
        <FormGroup>
          <InputLabel id="email" label="Email" />
          <FormInputs id="email" name={"email"} label="Email" />
        </FormGroup>
        <FormGroup>
          <InputLabel id="message" label="Message" />
          <FormTextArea id="message" name={"message"} label="Subject" />
        </FormGroup>
        <div className="self-end">
          <FormButton />
        </div>
      </div>
    </form>
  );
};

export default Form;
