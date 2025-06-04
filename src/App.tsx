import { useState } from 'react'
import StepButton from './components/StepButton'
import Step1 from './components/Step1';

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

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
        {
          (() => {
            switch (activeStep) {
              case 1:
                return <Step1 />
              // case 2:
              //   return <Step2 />
              default:
                return null
            }
          })()
        }
      <section className='next-button-container'>
        <button className='nextButton'>Next Step</button>
      </section>
    </>
  )
}

export default App
