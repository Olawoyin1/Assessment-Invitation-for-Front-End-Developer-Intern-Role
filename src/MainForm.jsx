import React, { useState, useRef } from "react";
import StepOne from "./StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import StepFour from "./Components/StepFour";
import Success from "./Components/Success";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const formikRef = useRef(null);

  const steps = [
    { number: 1, label: "Your info" },
    { number: 2, label: "Select plan" },
    { number: 3, label: "Add-ons" },
    { number: 4, label: "Summary" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    billing: "monthly",
    addons: [], // Store selected add-ons
  });

  console.log(formData)

  const handleNext = () => {
    if (step === 1 && formikRef.current) {
      formikRef.current.setTouched({ name: true, email: true, phone: true });

      formikRef.current.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          setFormData((prevData) => ({ ...prevData, ...formikRef.current.values }));
          setStep(step + 1);
        }
      });
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="main-form d-flex align-items-center justify-content-center">
      <div className="form-container">
        <div className="steps p-4 d-flex gap-4">
          {steps.map((item) => (
            <div key={item.number} className="gap-2 d-flex align-items-center">
              <div className={step === item.number ? "num done border d-flex align-items-center justify-content-center" : "num border d-flex align-items-center justify-content-center"}>
                {item.number}
              </div>
              <div className="d-flex flex-column">
                <small className="muted m-0 p-0">STEP {item.number}</small>
                <p className="fw-bold m-0 p-0 text-uppercase">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="form bg-blck">
          {step === 1 && <StepOne formikRef={formikRef} formData={formData} />}
          {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}
          {step === 3 && <StepThree formData={formData} setFormData={setFormData} />}
          {step === 4 && <StepFour formData={formData} />}
          {step === 5 && <Success />}

          {step < steps.length + 1 ? (
            <div className="cta">
              {step > 1 && (
                <button type="button" className="bg-dark float-start text-white prev" onClick={() => setStep(step - 1)}>
                  Go Back
                </button>
              )}
              <button type="button" onClick={handleNext} className="bg-dark float-end text-white next">
                {step === steps.length ? "Submit" : "Next Step"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MainForm;
