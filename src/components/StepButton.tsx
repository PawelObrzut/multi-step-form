type Props = {
  step: number;
  isActive: boolean;
  onClick: () => void;
}

const StepButton = ({step, isActive, onClick}: Props) => {
  return (
    <button 
      className={`stepButton ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {step}
    </button>
  )
}

export default StepButton