import { styleLabel } from './styleLabel'

describe('styleLabel', () => {
  test('adds space between camelCase words and capitalizes the first word', () => {
    expect(styleLabel('onlineService')).toBe('Online service')
    expect(styleLabel('largeStorage')).toBe('Large storage')
    expect(styleLabel('customizableProfile')).toBe('Customizable profile')
  })

  test('handles single lowercase word', () => {
    expect(styleLabel('email')).toBe('Email')
  })

  test('handles already spaced string with camelCase', () => {
    expect(styleLabel('emailAddressLabel')).toBe('Email address label')
  })

  test('does not crash on strings with no camelCase pattern', () => {
    expect(styleLabel('Password')).toBe('Password')
  })
})
