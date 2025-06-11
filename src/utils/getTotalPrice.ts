import { PRICES } from '../constants/subscriptionData';

export function getTotalPrice(plan: keyof typeof PRICES.plans, billing: 'monthly' | 'yearly', addOns: Record<string, boolean>) {
  const planPrice = PRICES.plans[plan][billing];

  const addOnsTotal = Object.entries(addOns).reduce((acc, [key, isChecked]) => {
    if (!isChecked) return acc;
    const addOnKey = key as keyof typeof PRICES.addOns;
    return acc + PRICES.addOns[addOnKey][billing];
  }, 0);

  return planPrice + addOnsTotal;
}