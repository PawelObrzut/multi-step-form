import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PLANS } from '../constants/subscriptionData';
import { useIsYearly } from "../hooks/useIsYearly";
import RadioInputCard from "../components/RadioInputCard";
import { getPrice } from "../utils/getPrice";
import NavButtons from "../components/NavButtons";

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

  useEffect(() => {
    register('plan');
    register('billing');
  }, [register]);

  return (
    <>
      <section className='form-body flex flex-column gap-1'>
        <h1 className='font-700'>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className='flex flex-column gap-05'>
          {
            PLANS.map(({ id, title, icon, monthly, yearly }) => (
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

        <div className='payment-plan-container flex font-500'>
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

      <section className='nav-buttons-container flex'>
        <NavButtons onPrev={onPrev} onNext={onNext} />
      </section>
    </>
  )
}

export default Step2