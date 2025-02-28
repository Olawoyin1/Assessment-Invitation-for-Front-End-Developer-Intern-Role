import React, { useState } from "react";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import StepFour from "./Components/StepFour";
import Success from "./Components/Success";

const Main = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false); // Track submission

  const steps = [
    { number: 1, label: "Your Info" },
    { number: 2, label: "Select Plan" },
    { number: 3, label: "Add-ons" },
    { number: 4, label: "Summary" },
  ];

  // Function to handle next step
  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setSubmitted(true); // Show success page after submission
    }
  };

  // Function to handle previous step
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="main d-flex align-items-center justify-content-center">
      <div className="form-container shadow rounded p-4">
        
        {/* Show Success Page if Submitted */}
        {submitted ? (
          <Success />
        ) : (
          <>
            {/* Step Indicator (Hidden on Success Page) */}
            <div className="steps grid mb-3 gap-3">
              {steps.map((item) => (
                <div 
                  key={item.number} 
                  className={step === item.number ? "each rounded active" : "each rounded"}
                ></div>
              ))}
            </div>

            {/* Form Content */}
            <div className="form-contents">
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
              {step === 4 && <StepFour />}
            </div>

            {/* CTA Buttons (Hidden on Success Page) */}
            <div className="cta d-flex justify-content-between gap-2">
              {/* Skip Button (Only on Step 1) */}
              {step === 1 && (
                <button 
                  type="button" 
                  className="bg-light text-dark rounded p-2 px-4" 
                  onClick={handleNext}
                >
                  Skip For Now
                </button>
              )}

              {/* Go Back Button (Step 2 & Above) */}
              {step > 1 && (
                <button 
                  type="button" 
                  className="bg-secondary text-white rounded p-2 px-4" 
                  onClick={handlePrev}
                >
                  Go Back
                </button>
              )}

              {/* Next or Submit Button */}
              <button 
                type="button"  
                className="bg-primary text-white px-5 py-2 rounded"
                onClick={handleNext}
              >
                {step === steps.length ? "Submit" : "Continue"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
