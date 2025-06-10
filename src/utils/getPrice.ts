export const getPrice = (
  monthly: number,
  yearly: number,
  isYearly: boolean
) => {
  return isYearly ? `$${yearly}/yr` : `$${monthly}/mo`;
};