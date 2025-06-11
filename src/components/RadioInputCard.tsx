type Props = {
  id: string;
  title: string;
  type: string;
  icon: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
  showPromoText?: boolean
}

const RadioInputCard = ({ id, title, type, icon, price, isSelected, onSelect, showPromoText }: Props) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name='Gaming Plan'
        checked={isSelected}
        onChange={onSelect}
        hidden
      />
      <label
        htmlFor={id}
        className={`plan-card flex cursor-pointer ${isSelected ? 'selected' : ''}`}
      >
        <img
          src={`/images/${icon}.svg`}
          alt={`${title} icon`}
          className='icon' />
        <div>
          <h3 className='font-500'>{title}</h3>
          <p>{price}</p>
          {showPromoText && <span>2 months free</span>}
        </div>
      </label>
    </div>
  )
}

export default RadioInputCard