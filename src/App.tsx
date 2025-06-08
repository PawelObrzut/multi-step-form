import { useState } from 'react'
import { FormProvider, useForm } from "react-hook-form"
import StepButton from './components/StepButton'
import Step1 from './components/Step1';
import Step2 from './components/Step2';

type FormValues = {
  name: string
  email: string
  phoneNumber: string
  plan: 'arcade' | 'advanced' | 'pro',
  billing: 'monthly' | 'yearly';
}

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  const onSubmit = (data: FormValues) => {
    console.log("Final Data:", data);
    alert("Submitted successfully!");
  };

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      plan: 'arcade',
      billing: 'monthly'
    }
  })

  return (
    <>
      <nav className='navigationSteps '>
        {
          [1, 2, 3, 4].map(step => (
            <StepButton
              key={step}
              step={step}
              isActive={step === activeStep}
              onClick={() => setActiveStep(step)}
            />
          ))
        }
      </nav>

      <main>
        <FormProvider {...methods}>
          <form 
            className='multiStepForm'
            onSubmit={methods.handleSubmit(onSubmit)} >
            {activeStep === 1 && <Step1 onNext={nextStep} />}
            {/* {step === 2 && <Step2 onBack={prevStep} />} */}
          </form>
        </FormProvider>
      </main>
    </>
  )
}

export default App
