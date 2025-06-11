import { useFormContext } from "react-hook-form";
import { ADDONS } from '../constants/subscriptionData';
import { useIsYearly } from "../hooks/useIsYearly";
import CheckboxAddOnCard from "../components/CheckboxAddOnCard";
import { getPrice } from "../utils/getPrice";
import NavButtons from "../components/NavButtons";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step3 = ({ onNext, onPrev }: Props) => {
  const { watch } = useFormContext();
  const { addOns } = watch();
  const isYearly = useIsYearly();

  return (
    <>
      <section className='form-body flex flex-column gap-1'>
        <h1>Pick add-ons.</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className='flex flex-column gap-05'>
          {
            ADDONS.map(({ id, title, description, monthly, yearly }, index) => (
              <CheckboxAddOnCard
                key={id}
                id={id}
                label={title}
                description={description}
                price={getPrice(monthly, yearly, isYearly)}
                isChecked={addOns[index]}
              />
            ))
          }
        </div>
      </section>

      <section className='nav-buttons-container flex'>
        <NavButtons onPrev={onPrev} onNext={onNext} />
      </section>
    </>
  )
}

export default Step3