import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Step3 from './Step3'
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

describe('Step3 - Pick add-ons', () => {
  let user: ReturnType<typeof userEvent.setup>
  let onNext: jest.Mock
  let onPrev: jest.Mock

  beforeEach(() => {
    user = userEvent.setup()
    onNext = jest.fn()
    onPrev = jest.fn()

    render(
      <Wrapper>
        <Step3 onNext={onNext} onPrev={onPrev} />
      </Wrapper>
    )
  })

  test('renders the correct heading and description', () => {
    expect(screen.getByRole('heading', { name: /pick add-ons/i })).toBeInTheDocument()
    expect(screen.getByText(/enhance your gaming experience/i)).toBeInTheDocument()
  })

  test('renders all available add-ons with labels and prices', () => {
    expect(screen.getByText(/online service/i).closest('label')).toBeInTheDocument()
    expect(screen.getByText(/large storage/i).closest('label')).toBeInTheDocument()
    expect(screen.getByText(/customizable profile/i).closest('label')).toBeInTheDocument()
  })


  test('can check and uncheck add-ons', async () => {
    const onlineServiceCheckbox = screen.getByLabelText(/online service/i) as HTMLInputElement
    expect(onlineServiceCheckbox.checked).toBe(false)

    await user.click(onlineServiceCheckbox)
    expect(onlineServiceCheckbox.checked).toBe(true)

    await user.click(onlineServiceCheckbox)
    expect(onlineServiceCheckbox.checked).toBe(false)
  })

  test('calls onNext and onPrev when buttons are clicked', async () => {
    const nextButton = screen.getByRole('button', { name: /next step/i })
    const backButton = screen.getByRole('button', { name: /go back/i })

    await user.click(nextButton)
    expect(onNext).toHaveBeenCalledTimes(1)

    await user.click(backButton)
    expect(onPrev).toHaveBeenCalledTimes(1)
  })
})