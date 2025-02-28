import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  // Progress bar steps
  const steps = [
    { number: 1, label: "Personal Info" },
    { number: 2, label: "Contact Details" },
    { number: 3, label: "Confirm & Submit" },
  ];

  // Form validation schemas
  const validationSchemas = [
    Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    Yup.object({
      phone: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
  ];

  // Handle form submission
  const handleSubmit = (values) => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      console.log("Final Submission:", values);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Multi-Step Form</h2>

      {/* Progress Bar */}
      <div className="mb-4 d-flex justify-content-center">
        {steps.map((item, index) => (
          <div key={index} className="text-center mx-2">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center ${
                step > item.number ? "bg-success text-white" : "bg-light text-dark"
              }`}
              style={{
                width: 40,
                height: 40,
                border: step === item.number ? "2px solid blue" : "2px solid gray",
              }}
            >
              {step > item.number ? "✅" : item.number}
            </div>
            <small>{item.label}</small>
          </div>
        ))}
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={validationSchemas[step - 1]}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="p-4 border rounded">
            {step === 1 && (
              <>
                <div className="mb-3">
                  <label>Name</label>
                  <Field type="text" name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-3">
                  <label>Phone</label>
                  <Field type="text" name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <Field type="text" name="address" className="form-control" />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>
              </>
            )}

            {step === 3 && (
              <div>
                <h5>Confirm Your Details:</h5>
                <p><strong>Name:</strong> {values.name}</p>
                <p><strong>Email:</strong> {values.email}</p>
                <p><strong>Phone:</strong> {values.phone}</p>
                <p><strong>Address:</strong> {values.address}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-3">
              {step > 1 && (
                <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                  Previous
                </button>
              )}
              <button type="submit" className="btn btn-primary">
                {step === steps.length ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
