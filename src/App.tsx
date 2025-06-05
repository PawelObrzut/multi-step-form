import { useState } from 'react'
import { useForm } from "react-hook-form"
import StepButton from './components/StepButton'
import Step1 from './components/Step1';

type Inputs = {
  name: string
  email: string
  phoneNumber: string
}

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<Inputs>();
  
  const submitForm = (data: Inputs) => {
    //TODO: create a state object variable to store all steps information.
    //? does a user prefer to have a form cleared when advancing to the next step?
    console.log(data.name)
    console.log(data.email)
    console.log(data.phoneNumber)
  }
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
      <main className=''>
        <form onSubmit={handleSubmit(submitForm)} className='multiStepForm'>
          <section className='formBody'>
          {(() => {
            switch (activeStep) {
              case 1:
                return <Step1 register={register} errors={errors} />
                // case 2:
                //   return <Step2 />
                default:
                  return null
                }
              })()}
          </section>
          <section className='next-button-container'>
            <button type='submit' className='nextButton'>Next Step</button>
          </section>
        </form>
      </main>
    </>
  )
}

export default App
