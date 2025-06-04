import { useState } from 'react'
import StepButton from './components/StepButton'

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
    </>
  )
}

export default App
