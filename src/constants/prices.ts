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