import { getTotalPrice } from './getTotalPrice'
import { PRICES } from '../constants/subscriptionData'

describe('getTotalPrice', () => {
  test('returns correct price for arcade plan with no add-ons (monthly)', () => {
    const result = getTotalPrice('arcade', 'monthly', {
      onlineService: false,
      largeStorage: false,
      customizableProfile: false
    })
    expect(result).toBe(PRICES.plans.arcade.monthly)
  })

  test('returns correct price for pro plan with all add-ons (yearly)', () => {
    const result = getTotalPrice('pro', 'yearly', {
      onlineService: true,
      largeStorage: true,
      customizableProfile: true
    })

    const expected = PRICES.plans.pro.yearly +
      PRICES.addOns.onlineService.yearly +
      PRICES.addOns.largeStorage.yearly +
      PRICES.addOns.customizableProfile.yearly
    expect(result).toBe(expected)
  })

  test('returns correct price with some add-ons selected (monthly)', () => {
    const result = getTotalPrice('advanced', 'monthly', {
      onlineService: true,
      largeStorage: false,
      customizableProfile: true
    })

    const expected = PRICES.plans.advanced.monthly +
      PRICES.addOns.onlineService.monthly +
      PRICES.addOns.customizableProfile.monthly
    expect(result).toBe(expected)
  })

  test('returns correct price if addOns object is empty', () => {
    const result = getTotalPrice('arcade', 'monthly', {})
    expect(result).toBe(PRICES.plans.arcade.monthly)
  })
})
