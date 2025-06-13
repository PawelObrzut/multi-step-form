import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Step4 from './Step4'
import { FormProvider, useForm } from 'react-hook-form'
import type { FormValues } from '../App'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      plan: 'pro',
      billing: 'yearly',
      addOns: {
        onlineService: true,
        largeStorage: true,
        customizableProfile: false
      }
    }
  });

  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('Step4 - Summary', () => {
  let user: ReturnType<typeof userEvent.setup>
  let onPrev: jest.Mock
  let onReviseBilling: jest.Mock

  beforeEach(() => {
    user = userEvent.setup()
    onPrev = jest.fn()
    onReviseBilling = jest.fn()

    render(
      <Wrapper>
        <Step4 onPrev={onPrev} onReviseBilling={onReviseBilling} />
      </Wrapper>
    )
  })

  test('renders a summary of selected plan and billing (mockValues in the Wrapper)', () => {
    expect(screen.getByText(/Pro \(Yearly\)/)).toBeInTheDocument()
    expect(screen.getByText(/Online service/i)).toBeInTheDocument()
    expect(screen.getByText(/Large storage/i)).toBeInTheDocument()
    expect(screen.queryByText(/Customizable profile/i)).not.toBeInTheDocument()
  })

  test('displays total price correctly', () => {
    const totalValue = screen.getByTestId('total-price')
    expect(screen.getByText(/Total \(per year\)/i)).toBeInTheDocument()
    expect(totalValue).toHaveTextContent('$180/yr')
  })

  test('calls onReviseBilling when "Change" is clicked', async () => {
    const changeButton = screen.getByText(/change/i)
    await user.click(changeButton)
    expect(onReviseBilling).toHaveBeenCalledTimes(1)
  })

  test('calls onPrev when button is clicked', async () => {
    const backButton = screen.getByRole('button', { name: /go back/i })
    await user.click(backButton)
    expect(onPrev).toHaveBeenCalledTimes(1)
  })
})
