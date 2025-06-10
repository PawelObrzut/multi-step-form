import { useFormContext } from "react-hook-form";
import { PRICES } from '../constants/prices';
import { useIsYearly } from "../hooks/useIsYearly";
import CheckboxAddOnCard from "../components/CheckboxAddOnCard";
import { getPrice } from "../utils/getPrice";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step3 = ({ onNext, onPrev }: Props) => {
  const { watch } = useFormContext();
  const { addOns } = watch();
  const isYearly = useIsYearly();

  const additions = [
    {
      id: 'onlineService',
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthly: PRICES.addOns.onlineService.monthly,
      yearly: PRICES.addOns.onlineService.yearly,
    },
    {
      id: 'largeStorage',
      title: 'Large storage',
      description: 'Extra 1TB of cloud save',
      monthly: PRICES.addOns.largeStorage.monthly,
      yearly: PRICES.addOns.largeStorage.yearly,
    },
    {
      id: 'customizableProfile',
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthly: PRICES.addOns.customizableProfile.monthly,
      yearly: PRICES.addOns.customizableProfile.yearly,
    }
  ]

  return (
    <>
      <section className='formBody'>
        <h1>Pick add-ons.</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className='checkboxContainer'>
          {
            additions.map(({ id, title, description, monthly, yearly }, index) => (
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

      <section className='navButtonsContainer'>
        <button type='button' className='prevButton visible' onClick={onPrev}>Go Back</button>
        <button type='button' className='nextButton cursor-pointer' onClick={onNext}>Next Step</button>
      </section>
    </>
  )
}

export default Step3