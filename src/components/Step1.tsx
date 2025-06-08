import { useFormContext } from "react-hook-form";

type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(['name', 'email', 'phoneNumber']);
    if (valid) onNext();
  };

  return (
    <>
      <section className="formBody">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <div>
          <label htmlFor='name'>Name</label>
          {typeof errors.name?.message === 'string' && <span className='errorMessage'>{errors.name.message}</span>}
        </div>
        <input
          id='name'
          placeholder='e.g. Stephen King'
          className={errors.name ? 'inputError' : ''}
          {...register('name', { required: 'This field is required' })}
        />

        <div>
          <label htmlFor='emailAddress'>Email Address</label>
          {typeof errors.email?.message === 'string' && <span className='errorMessage'>{errors.email.message}</span>}
        </div>
        <input
          id='emailAddress'
          type="email"
          placeholder='e.g. stephenking@lorem.com'
          className={errors.email ? 'inputError' : ''}
          {...register('email', {
            required: { value: true, message: 'This field is required' },
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
          })}
        />

        <div>
          <label htmlFor='phoneNumber'>Phone Number</label>
          {typeof errors.phoneNumber?.message === 'string' && <span className='errorMessage'>{errors.phoneNumber.message}</span>}
        </div>
        <input
          id='phoneNumber'
          type='text'
          className={errors.phoneNumber ? 'inputError' : ''}
          placeholder='e.g. +1 234 567 890'
          {...register('phoneNumber', { required: 'This field is required' })}
        />
      </section>

      <section className='nav-buttons-container'>
        <button className='prevButton'>Go Back</button>
        <button type='button' className='nextButton' onClick={handleNext}>Next</button>
      </section>
    </>
  )
}

export default Step1