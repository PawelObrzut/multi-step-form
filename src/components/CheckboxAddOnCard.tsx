import { useFormContext } from 'react-hook-form'

type Props = {
  label: string;
  description: string;
  price: string;
  id: string;
  isChecked: boolean;
}

const CheckboxAddOnCard = ({ label, description, price, id, isChecked }: Props) => {
  const { register } = useFormContext();

  return (
    <div className='add-on-card flex gap-1'>
      <input
        type='checkbox'
        id={id}
        checked={isChecked}
        {...register('addOns.' + id)}
      />
      <div className='flex-grow-1'>
        <label htmlFor={id} className='cursor-pointer'>{label}</label>
        <p>{description}</p>
      </div>
      <span className='add-on-price'>
        {price}
      </span>
    </div>
  )
}

export default CheckboxAddOnCard