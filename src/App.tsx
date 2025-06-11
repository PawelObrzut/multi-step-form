import { useState } from 'react'
import { FormProvider, useForm } from "react-hook-form"
import StepButton from './components/StepButton'
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';

export type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: 'arcade' | 'advanced' | 'pro';
  billing: 'monthly' | 'yearly';
  addOns: {
    onlineService: boolean,
    largeStorage: boolean,
    customizableProfile: boolean
  };
}

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isFinished, setIsFinished] = useState(false);

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  const goToStep2 = () => setActiveStep(2);

  const onSubmit = () => setIsFinished((prev) => !prev);

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      plan: 'arcade',
      billing: 'monthly',
      addOns: {
        onlineService: false,
        largeStorage: false,
        customizableProfile: false
      }
    }
  });

  return (
    <>
      <nav className='steps-container flex gap-1'>
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
        {isFinished ? (
          <div>
            <Step5 />
          </div>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} >
              {(() => {
                switch (activeStep) {
                  case 1:
                    return <Step1 onNext={nextStep} />
                  case 2:
                    return <Step2 onNext={nextStep} onPrev={prevStep} />
                  case 3:
                    return <Step3 onNext={nextStep} onPrev={prevStep} />
                  case 4:
                    return <Step4 onPrev={prevStep} onReviseBilling={goToStep2} />
                  default:
                    return null
                }
              })()}

            </form>
          </FormProvider>
        )}
      </main >
    </>
  )
}

export default App
