type Props = {
  index: number;
  step: string;
  isActive: boolean;
  onClick: () => void
}

const StepButton = ({ index, step, isActive, onClick }: Props) => {
  return (
    <div className='step-button-container'>
      <button
        className={`step-button ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {index + 1}
      </button>
      <div className='steps-info'>
        <h5 className='color-grey-500'>STEP {index + 1}</h5>
        <h5 className='color-white font-700'>{step.toUpperCase()}</h5>
      </div>
    </div>
  )
}

export default StepButton