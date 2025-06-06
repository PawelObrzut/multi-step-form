import React, { useState } from 'react'

const Step2 = () => {
  const [isYearly, setIsYearly] = useState(false);
  const handlePlanToggle = () => setIsYearly(prev => !prev);


  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <section className='planRadioContainer'>
        <div>
          <input type='radio' id='arcade' name='the_plan' value='arcade' hidden />
          <label htmlFor='arcade' className='planCard'>
            <img src='/images/icon-arcade.svg' alt='Arcade icon' className='planIcon' />
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </label>

        </div>
        <div>
          <input type='radio' id='advanced' name='the_plan' value='advanced' hidden />
          <label htmlFor='advanced' className='planCard'>
            <img src='/images/icon-advanced.svg' alt='Advanced icon' className='planIcon' />
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </label>
        </div>
        <div>
          <input type='radio' id='pro' name='the_plan' value='pro' hidden />
          <label htmlFor='pro' className='planCard'>
            <img src='/images/icon-pro.svg' alt='Pro icon' className='planIcon' />
            <h3>Pro</h3>
            <p>$15/mo</p>
          </label>
        </div>
      </section>

      <section className='paymentPlanContainer'>
        <div
          className={`${isYearly ? '' : 'active'}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </div>
        <div>
          <label className='switch'>
            <input
              type='checkbox'
              checked={isYearly}
              onChange={handlePlanToggle}
            />
            <span className='slider round'></span>
          </label>
        </div>
        <div
          className={`${isYearly ? 'active' : ''}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </div>
      </section>
    </>
  )
}

export default Step2