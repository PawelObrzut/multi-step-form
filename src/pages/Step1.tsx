import { useFormContext } from "react-hook-form";
import TextInput from "../components/TextInput";
import NavButtons from "../components/NavButtons";

type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  const { trigger } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(['name', 'email', 'phoneNumber']);
    if (valid) onNext();
  };

  return (
    <>
      <section className="formBody">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <TextInput
          id='name'
          label='Name'
          type='text'
          placeholder='e.g. Stephen King'
          validation={{ required: 'This field is required' }}
        />

        <TextInput
          id='email'
          label='Email Address'
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          validation={{
            required: { value: true, message: 'This field is required' },
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
          }}
        />

        <TextInput
          id='phoneNumber'
          label='Phone Number'
          type='text'
          placeholder='e.g. +1 234 567 890'
          validation={{ required: 'This field is required' }}
        />
      </section>

      <section className='navButtonsContainer'>
        <div />
        <NavButtons onNext={handleNext}/>
      </section>
    </>
  )
}

export default Step1