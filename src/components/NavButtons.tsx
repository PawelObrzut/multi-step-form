type Props = {
  onPrev?: () => void;
  onNext?: () => void;
  submit?: boolean;
}

const NavButtons = ({ onPrev, onNext, submit = false }: Props) => {
  return (
    <>
      {onPrev && (<button type='button' onClick={onPrev} className='color-grey-500'>Go Back</button>)}
      {submit ?
        (<button type='submit' className='submit-button'>Confirm</button>)
        :
        (<button type='button' onClick={onNext} className='next-button'>Next Step</button>)}
    </>
  )
}

export default NavButtons