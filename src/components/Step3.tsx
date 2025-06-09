import React from 'react'
import { useFormContext } from "react-hook-form";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step3 = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <section className='formBody'>
        <h1>Pick add-ons.</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className='checkboxContainer'>
          <div className='addOnCard'>
            <input type='checkbox' id='onlineService' name='online service' value='online service' className='' />

            <div className='addOnTitle'>
              <label htmlFor='onlineService' className=''>Online service</label>
              <p>Access to multiplayer games</p>
            </div>

            <span className='addOnPrice'>
              +$1/mo
            </span>
          </div>

          <div className='addOnCard active'>
            <input type='checkbox' id='largeStorage' name='large storage' value='large storage' className='' />

            <div className='addOnTitle'>
              <label htmlFor='largeStorage' className=''>Large storage</label>
              <p>Extra 1TB of cloud save</p>
            </div>

            <span className='addOnPrice'>
              +$1/mo
            </span>
          </div>

          <div className='addOnCard'>
            <input type='checkbox' id='customProfile' name='customizable profile' value='customizable profile' className='' />

            <div className='addOnTitle'>
              <label htmlFor='customProfile' className=''>Customizable profile</label>
              <p>Custom theme on your profile</p>
            </div>

            <span className='addOnPrice'>
              +$1/mo
            </span>
          </div>
        </div>
      </section>


      <section className='nav-buttons-container'>
        <button type='button' className='prevButton visible' onClick={onPrev}>Go Back</button>
        <button type='button' className='nextButton' onClick={onNext}>Next</button>
      </section>
    </>
  )
}

export default Step3