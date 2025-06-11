type Props = {
  label: string;
  price: number;
  isYearly: boolean;
};

const AddOnSummaryRow = ({ label, price, isYearly }: Props) => {
  return (
    <>
      <div>{label}</div>
      <div>+${price}/{isYearly ? 'yr' : 'mo'}</div>
    </>
  )
}

export default AddOnSummaryRow