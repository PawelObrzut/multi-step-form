import { getPrice } from './getPrice'

describe('getPrice', () => {
  test('returns monthly price when isYearly is false', () => {
    expect(getPrice(9, 90, false)).toBe('$9/mo')
  })

  test('returns yearly price when isYearly is true', () => {
    expect(getPrice(9, 90, true)).toBe('$90/yr')
  })
})