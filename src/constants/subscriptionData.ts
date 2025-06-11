export const PRICES = {
    plans: {
      arcade: { monthly: 9, yearly: 90 },
      advanced: { monthly: 12, yearly: 120 },
      pro: { monthly: 15, yearly: 150 },
    },
    addOns: {
      onlineService: { monthly: 1, yearly: 10 },
      largeStorage: { monthly: 2, yearly: 20 },
      customizableProfile: { monthly: 2, yearly: 20 }
    }
  } as const;

  export const PLANS = [
  {
    id: 'arcade',
    title: 'Arcade',
    icon: 'icon-arcade',
    monthly: PRICES.plans.arcade.monthly,
    yearly: PRICES.plans.arcade.yearly,
  },
  {
    id: 'advanced',
    title: 'Advanced',
    icon: 'icon-advanced',
    monthly: PRICES.plans.advanced.monthly,
    yearly: PRICES.plans.advanced.yearly,
  },
  {
    id: 'pro',
    title: 'Pro',
    icon: 'icon-pro',
    monthly: PRICES.plans.pro.monthly,
    yearly: PRICES.plans.pro.yearly,
  },
] as const;

export const ADDONS = [
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
  },
] as const;