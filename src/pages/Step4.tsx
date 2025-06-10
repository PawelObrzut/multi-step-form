import { useFormContext } from "react-hook-form";
import { PRICES } from '../constants/prices';
import { useIsYearly } from "../hooks/useIsYearly";
import React from "react";

type Props = {
  onPrev: () => void;
  onReviseBillinng: () => void
};

const Step4 = ({ onPrev, onReviseBillinng }: Props) => {
  const { watch } = useFormContext();
  const { plan, billing, addOns } = watch();
  const isYearly = useIsYearly();
  const planPrice = PRICES.plans[plan][billing];

  const styleLabel = (label: string): string => {
    return label
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(' ')
      .map(word => word.charAt(0).toLowerCase() + word.slice(1))
      .join(' ')
      .replace(/^./, c => c.toUpperCase());
  };

  return (
    <>
      <section className='formBody'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className='summary-grid'>
          <div className='summary-header-row'>
            <div>
              <span className='plan'>
                {styleLabel(plan)} ({styleLabel(billing)})
              </span>
              <span
                className='changeButton'
                onClick={onReviseBillinng}
              >
                Change
              </span>
            </div>
            <div className='price'>
              ${planPrice}/{isYearly ? 'yr' : 'mo'}
            </div>
          </div>

          {Object.entries(addOns).map(([key, value]) => {
            if (value) {
              return (
                <React.Fragment key={key}>
                  <div>{styleLabel(key)}</div>
                  <div className='price'>
                    +${PRICES.addOns[key][billing]}/{isYearly ? 'yr' : 'mo'}
                  </div>
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>


        <div className='total'>
          <div>Total ({isYearly ? 'per year' : 'per month'})</div>
          <div className='total-price'>
            ${planPrice + Object.entries(addOns).reduce((acc, [key, value]) => {
              if (value) {
                const price = PRICES.addOns[key][billing];
                acc += price;
              }
              return acc;
            }, 0)}/{isYearly ? 'yr' : 'mo'}
          </div>
        </div>
      </section>

      <section className='nav-buttons-container'>
        <button type='button' className='prevButton visible' onClick={onPrev}>Go Back</button>
        <button type='submit' className='submitButton'>Confirm</button>
      </section>
    </>
  )
}

export default Step4