import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PRICES } from '../constants/prices';
import { useIsYearly } from "../hooks/useIsYearly";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step2 = ({ onNext, onPrev }: Props) => {
  const {
    register,
    setValue,
    watch,
  } = useFormContext();

  const plan = watch('plan');
  const isYearly = useIsYearly();

  const handlePlanToggle = () => {
    setValue('billing', isYearly ? 'monthly' : 'yearly');
  };

  const getPrice = (monthly: number, yearly: number) => {
    return isYearly ? `$${yearly}/yr` : `$${monthly}/mo`;
  }

  useEffect(() => {
    register('plan');
    register('billing');
  }, [register]);

  return (
    <>
      <section className='formBody'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className='planRadioContainer'>
          <div>
            <input type='radio' id='arcade' name='the_plan' value='arcade' hidden
              checked={plan === 'arcade'}
              onChange={() => setValue('plan', 'arcade')}
            />
            <label htmlFor='arcade' className='planCard'>
              <img src='/images/icon-arcade.svg' alt='Arcade icon' className='planIcon' />
              <div>
                <h3>Arcade</h3>
                <p>{getPrice(PRICES.plans.arcade.monthly, PRICES.plans.arcade.yearly)}</p>
                {isYearly && <span className="promoText">2 months free</span>}
              </div>
            </label>
          </div>
          <div>
            <input type='radio' id='advanced' name='the_plan' value='advanced' hidden
              checked={plan === 'advanced'}
              onChange={() => setValue('plan', 'advanced')}
            />
            <label htmlFor='advanced' className='planCard'>
              <img src='/images/icon-advanced.svg' alt='Advanced icon' className='planIcon' />
              <div>
                <h3>Advanced</h3>
                <p>{getPrice(PRICES.plans.advanced.monthly, PRICES.plans.advanced.yearly)}</p>
                {isYearly && <span className="promoText">2 months free</span>}
              </div>
            </label>
          </div>
          <div>
            <input type='radio' id='pro' name='the_plan' value='pro' hidden
              checked={plan === 'pro'}
              onChange={() => setValue('plan', 'pro')}
            />
            <label htmlFor='pro' className='planCard'>
              <img src='/images/icon-pro.svg' alt='Pro icon' className='planIcon' />
              <div>
                <h3>Pro</h3>
                <p>{getPrice(PRICES.plans.pro.monthly, PRICES.plans.pro.yearly)}</p>
                {isYearly && <span className="promoText">2 months free</span>}
              </div>
            </label>
          </div>
        </div>

        <div className='paymentPlanContainer'>
          <div
            className={`${isYearly ? '' : 'active'}`}
            onClick={() => setValue('billing', 'monthly')}
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
            onClick={() => setValue('billing', 'yearly')}
          >
            Yearly
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

export default Step2