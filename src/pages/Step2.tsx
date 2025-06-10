import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PRICES } from '../constants/prices';
import { useIsYearly } from "../hooks/useIsYearly";
import RadioInputCard from "../components/RadioInputCard";
import { getPrice } from "../utils/getPrice";

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

  const plans = [
    {
      id: 'arcade',
      title: 'Arcade',
      icon: 'icon-arcade',
      monthly: PRICES.plans.arcade.monthly,
      yearly: PRICES.plans.arcade.yearly,
    },
    {
      id: 'advanced',
      title: 'Advanced',
      icon: 'icon-advanced',
      monthly: PRICES.plans.advanced.monthly,
      yearly: PRICES.plans.advanced.yearly,
    },
    {
      id: 'pro',
      title: 'Pro',
      icon: 'icon-pro',
      monthly: PRICES.plans.pro.monthly,
      yearly: PRICES.plans.pro.yearly,
    },
  ];

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
          {
            plans.map(({ id, title, icon, monthly, yearly }) => (
              <RadioInputCard
                key={id}
                id={id}
                title={title}
                type='radio'
                icon={icon}
                price={getPrice(monthly, yearly, isYearly)}
                isSelected={plan === id}
                showPromoText={isYearly}
                onSelect={() => setValue('plan', id)}
              />
            ))
          }
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