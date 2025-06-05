import React from 'react'
import type { FieldErrors, UseFormRegister } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  phoneNumber: string
}

type Props = {
  register: UseFormRegister<Inputs>
  errors: FieldErrors<Inputs>
}

const Step1 = ({ register, errors }: Props) => {
  return (
    <>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div>
        <label htmlFor='name'>Name</label>
        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
      </div>
      <input 
        id='name'
        placeholder='e.g. Stephen King' 
        className={errors.name ? 'inputError' : ''}
        {...register('name', { required: 'This field is required' })} 
      />

      <div>
        <label htmlFor='emailAddress'>Email Address</label>
        {errors.email && <span className='errorMessage'>{errors.email.message}</span>}
      </div>
      <input
        id='emailAddress'
        type="email"
        placeholder='e.g. stephenking@lorem.com'
        className={errors.email ? 'inputError' : ''}
        {...register('email', { 
          required: { value: true, message: 'This field is required' },
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address'}
        })}
      />

      <div>
        <label htmlFor='phoneNumber'>Phone Number</label>
        {errors.phoneNumber && <span className='errorMessage'>{errors.phoneNumber.message}</span>}
      </div>
      <input 
        id='phoneNumber'
        type='text'
        className={errors.phoneNumber ? 'inputError' : ''}
        placeholder='e.g. +1 234 567 890' 
        {...register('phoneNumber', { required: 'This field is required' })}
        />

    </>
  )
}

export default Step1