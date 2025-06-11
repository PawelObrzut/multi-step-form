type Props = {
  onPrev?: () => void;
  onNext?: () => void;
  submit?: boolean;
}

const NavButtons = ({ onPrev, onNext, submit = false }: Props) => {
  return (
    <>
      {onPrev && (<button type='button' onClick={onPrev} className='prevButton'>Go Back</button>)}
      {submit ?
        (<button type='submit' className='submitButton'>Confirm</button>)
        :
        (<button type='button' onClick={onNext} className='nextButton'>Next Step</button>)}
    </>
  )
}

export default NavButtons