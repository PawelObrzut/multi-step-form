import { useFormContext } from "react-hook-form";
import { PRICES } from '../constants/subscriptionData';
import { useIsYearly } from "../hooks/useIsYearly";
import { styleLabel } from "../utils/styleLabel";
import { getTotalPrice } from "../utils/getTotalPrice";
import AddOnSummaryRow from "../components/AddOnSummaryRow";
import type { FormValues } from "../App";
import NavButtons from "../components/NavButtons";

type Props = {
  onPrev: () => void;
  onReviseBilling: () => void;
};

const Step4 = ({ onPrev, onReviseBilling }: Props) => {
  const { watch } = useFormContext();
  const { plan, billing, addOns } = watch() as FormValues;
  const isYearly = useIsYearly();
  const planPrice = PRICES.plans[plan][billing];

  return (
    <>
      <section className='form-body flex flex-column gap-1'>
        <h1 className='font-700'>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className='summary-container'>
          <div className='summary-header-row'>
            <div>
              <span className='color-blue-950 font-500'> {styleLabel(plan)} ({styleLabel(billing)}) </span>
              <span className='change-button cursor-pointer color-grey-500' onClick={onReviseBilling}> Change </span>
            </div>
            <div className='color-blue-950 font-500'>
              ${planPrice}/{isYearly ? 'yr' : 'mo'}
            </div>
          </div>

          {Object.entries(addOns).map(([key, value]) => {
            if (!value) return null
            const price = PRICES.addOns[key as keyof typeof PRICES.addOns][billing];
            return (
              <AddOnSummaryRow
                key={key}
                label={styleLabel(key)}
                isYearly={isYearly}
                price={price}
              />
            );
          })}
        </div>

        <div className='total flex'>
          <div>Total ({isYearly ? 'per year' : 'per month'})</div>
          <div className='total-price'>
            ${getTotalPrice(plan, billing, addOns)}/{isYearly ? 'yr' : 'mo'}
          </div>
        </div>
      </section>

      <section className='nav-buttons-container flex'>
        <NavButtons onPrev={onPrev} submit={true} />
      </section>
    </>
  )
}

export default Step4