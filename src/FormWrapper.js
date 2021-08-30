import PaypalButton from "./PaypalButton";

const { paypal = null } = window;

function FormWrapper() {
  if (paypal === null) {
    return null;
  }

  return (
    <PaypalButton />
  );
}

export default FormWrapper;
