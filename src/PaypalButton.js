import { useFormikContext } from "formik";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const buttonStyle = {
  color: "gold",
  fundingicons: false,
  label: "checkout",
  shape: "rect",
  size: "responsive",
  tagline: false,
};

const Button = window.paypal.Buttons.driver("react", { React, ReactDOM });

/**
 * React Paypal Button example:
 * https://github.com/Luehang/react-paypal-button-v2
 */
function PaypalButton() {
  const ref = useRef();
  const [isError, setIsError] = useState(false);
  const {
    values,
    submitForm,
    isSubmitting,
    setSubmitting,
    isValid,
    resetForm,
  } = useFormikContext();

  /**
   *
   */
  function setSubmittingState() {
    if (isValid) {
      console.log('setSubmittingState');
      setSubmitting(true);
    }
  }

  useEffect(() => {
    if (ref.current && values?._paypal_token) {
      ref.current(values._paypal_token);
      ref.current = null;
      setSubmittingState();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  async function createOrderOrBillingAgreement(b) {
    if (isError) {
      setIsError(false);
    }

    await submitForm();

    const a = new Promise(res => {
      ref.current = res;
    });

    return a;
  }

  function onApprove() {
    console.log('yeah');
  }

  function reset() {
    ref.current = null;
    resetForm();
  }

  function onCancel(e) {
    console.debug('onCancel', e);
    reset();
  }

  function onError(e) {
    console.debug('onError', e);
    reset();
  }

  return (
    <div>
      {(isError) && (
        <div role="alert">
          An error occured.
        </div>
      )}

      {isSubmitting &&
        <div role="alert">
          In progress, please wait...
        </div>
      }

      <div>
        <Button
          commit
          env="sandbox"
          createBillingAgreement={createOrderOrBillingAgreement}
          onApprove={onApprove}
          onCancel={onCancel}
          onError={onError}
          style={buttonStyle}
        />
      </div>
    </div>
  );
}

export default PaypalButton;
