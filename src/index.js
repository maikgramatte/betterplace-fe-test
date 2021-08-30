import React from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";

import reportWebVitals from "./reportWebVitals";
import FormWrapper from "./FormWrapper";

import "./index.css";

const submitHandler = (_, formik) => {
  setTimeout(() => {
    formik.setValues({ _paypal_token: "fake_paypal_token" });
    formik.setSubmitting(false);
  }, 3000);
};

ReactDOM.render(
  <React.StrictMode>
    <Formik onSubmit={submitHandler} initialValues={{}}>
      <FormWrapper />
    </Formik>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
