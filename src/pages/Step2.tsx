import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PRICES } from '../constants/prices';
import { useIsYearly } from "../hooks/useIsYearly";
import RadioInputCard from "../components/RadioInputCard";

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
          <RadioInputCard
            id='arcade'
            title='Arcade'
            type='radio'
            icon='icon-arcade'
            price={getPrice(PRICES.plans.arcade.monthly, PRICES.plans.arcade.yearly)}
            isSelected={plan === 'arcade'}
            showPromoText={isYearly}
            onSelect={() => setValue('plan', 'arcade')}
          />

          <RadioInputCard
            id='advanced'
            title='Advanced'
            type='radio'
            icon='icon-advanced'
            price={getPrice(PRICES.plans.advanced.monthly, PRICES.plans.advanced.yearly)}
            isSelected={plan === 'advanced'}
            showPromoText={isYearly}
            onSelect={() => setValue('plan', 'advanced')}
          />

          <RadioInputCard
            id='pro'
            title='Pro'
            type='radio'
            icon='icon-pro'
            price={getPrice(PRICES.plans.pro.monthly, PRICES.plans.pro.yearly)}
            isSelected={plan === 'pro'}
            showPromoText={isYearly}
            onSelect={() => setValue('plan', 'pro')}
          />
        </div>

        <div className='paymentPlanContainer'>
          <div
            className={`${isYearly ? '' : 'active'} cursor-pointer`}
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
            className={`${isYearly ? 'active' : ''} cursor-pointer`}
            onClick={() => setValue('billing', 'yearly')}
          >
            Yearly
          </div>
        </div>
      </section>

      <section className='navButtonsContainer'>
        <button type='button' className='prevButton visible' onClick={onPrev}>Go Back</button>
        <button type='button' className='nextButton cursor-pointer' onClick={onNext}>Next Step</button>
      </section>
    </>
  )
}

export default Step2