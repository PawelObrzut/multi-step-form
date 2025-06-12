import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Step1 from './Step1'
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

describe('Step1 validation', () => {
  let user: ReturnType<typeof userEvent.setup>
  let onNext: jest.Mock

  beforeEach(() => {
    user = userEvent.setup()
    onNext = jest.fn()

    render(
      <Wrapper>
        <Step1 onNext={onNext} />
      </Wrapper>
    )
  })

  test('displays validation error messages when fields are empty', async () => {
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(await screen.findAllByText('This field is required')).toHaveLength(3)
    expect(onNext).not.toHaveBeenCalled()
  })

  test('shows "Enter a valid email address" error when email is badly formatted', async () => {
    await user.type(screen.getByLabelText(/email/i), 'pawel@doingtests')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(await screen.findByText(/enter a valid email address/i)).toBeInTheDocument()
    expect(onNext).not.toHaveBeenCalled()
  })
})
