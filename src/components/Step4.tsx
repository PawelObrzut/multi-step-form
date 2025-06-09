import { useFormContext } from "react-hook-form";

type Props = {
  onPrev: () => void;
};

const Step4 = ({onPrev}: Props) => {
  const { watch } = useFormContext();
  const { plan, billing, addOns } = watch();

  return (
    <>
      <section className='formBody'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className='summary-grid'>
          <div>Arcade (Yearly)</div>
          <div className='price'>$90/yr</div>
          <div>Online Service</div>
          <div className='price'>+$10/yr</div>
          <div>Customizable Profile</div>
          <div className='price'>+$20/yr</div>
          <div className='total-label'>Total (per year)</div>
          <div className='total-price'>$120/yr</div>
        </div>
      </section>

      <section className='nav-buttons-container'>
        <button type='button' className='prevButton visible' onClick={onPrev}>Go Back</button>
        <button type='button' className='nextButton' >Next</button>
      </section>
    </>
  )
}

export default Step4