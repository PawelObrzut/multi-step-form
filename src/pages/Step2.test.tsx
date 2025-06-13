import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Step2 from './Step2'
import { FormProvider, useForm } from 'react-hook-form'
import type { FormValues } from '../App'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      plan: 'arcade',
      billing: 'monthly',
      addOns: {
        onlineService: false,
        largeStorage: false,
        customizableProfile: false
      }
    }
  });

  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('Step2 - Select your plan', () => {
  let user: ReturnType<typeof userEvent.setup>
  let onNext: jest.Mock
  let onPrev: jest.Mock

  beforeEach(() => {
    user = userEvent.setup()
    onNext = jest.fn()
    onPrev = jest.fn()

    render(
      <Wrapper>
        <Step2 onPrev={onPrev} onNext={onNext} />
      </Wrapper>
    )
  })

  test('"arcade" is selected by default', async () => {
    expect(screen.getByText(/arcade/i).closest('label')).toHaveClass('selected')
  })

  test('may select only 1 of 3 available options', async () => {
    await user.click(screen.getByText(/pro/i))
    expect(screen.getByText(/pro/i).closest('label')).toHaveClass('selected')
    expect(screen.getByText(/arcade/i).closest('label')).not.toHaveClass('selected')
    expect(screen.getByText(/advanced/i).closest('label')).not.toHaveClass('selected')
  })

  test('toggles billing between monthly and yearly', async () => {

  })
})