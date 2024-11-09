'use client'
import React, { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

export default function Home() {
  const [step, setStep] = useState(1); // Initial step is set to 1

  // Function to move to the next step
  const goToNextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && <FirstStep onNext={goToNextStep} />}
      {step === 2 && <SecondStep />}
    </>
  );
}
