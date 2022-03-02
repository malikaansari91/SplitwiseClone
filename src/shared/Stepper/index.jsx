import React from "react";
import { StepperStep, StepperSteps } from "./components/StepperSteps";
import { useStepper } from "../../context";
import "./styles.css";

export const Stepper = ({ children, className = "" }) => {
  const { currentStep, steps } = useStepper();
  return (
    <div className={`stepper-component ${className}`}>
      <div className="stepper-header">
        {steps.length
          ? steps.map((step, index) => (
              <div
                key={step.id}
                className={`stepper-header-item ${
                  currentStep >= index ? "completed" : ""
                }`}
              >
                <div className="step-counter">{index + 1}</div>
                {step.name && <div className="step-name">{step.name}</div>}
              </div>
            ))
          : null}
      </div>
      <div className="step-body">{children}</div>
    </div>
  );
};

Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;
