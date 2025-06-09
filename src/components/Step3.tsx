import React from 'react'
import { useFormContext } from "react-hook-form";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step3 = ({ onNext, onPrev }: Props) => {
  const {
    register,
    watch,
  } = useFormContext();

  const addOns = watch('addOns');


  return (
    <>
      <section className='formBody'>
        <h1>Pick add-ons.</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className='checkboxContainer'>
          <div className='addOnCard'>
            <input
              type='checkbox'
              id='onlineService'
              checked={addOns.onlineService}
              {...register('addOns.onlineService')}
            />

            <div className='addOnTitle'>
              <label htmlFor='onlineService'>Online service</label>
              <p>Access to multiplayer games</p>
            </div>

            <span className='addOnPrice'>
              +$1/mo
            </span>
          </div>

          <div className='addOnCard'>
            <input 
              type='checkbox' 
              id='largeStorage'
              checked={addOns.largeStorage}
              {...register('addOns.largeStorage')}
            />

            <div className='addOnTitle'>
              <label htmlFor='largeStorage'>Large storage</label>
              <p>Extra 1TB of cloud save</p>
            </div>

            <span className='addOnPrice'>
              +$1/mo
            </span>
          </div>

          <div className='addOnCard'>
            <input
              type='checkbox'
              id='customProfile'
              checked={addOns.customizableProfile}
              {...register('addOns.customizableProfile')}
            />

            <div className='addOnTitle'>
              <label htmlFor='customProfile'>Customizable profile</label>
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