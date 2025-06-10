import { useFormContext } from "react-hook-form";

type TextInputProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  validation: object;
};

const TextInput = ({ id, label, type, placeholder, validation }: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id as keyof typeof errors];

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      { error?.message && <span className='errorMessage'>{String(error.message)}</span> }
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={error ? 'inputError' : ''}
        {...register(id, validation)}
      />
    </div>
  )
}

export default TextInput