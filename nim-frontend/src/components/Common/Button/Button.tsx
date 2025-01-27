import { FC } from 'react'

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}
const Button: FC<ButtonProps> = ({
  text,
  onClick,
  variant
}) => {
  
  if (variant === 'primary') {
    return (
      <button
        className='bg-rose-50 text-black rounded-4xl px-9 py-2.5 font-montserrat text-2xl opacity-80 hover:opacity-100 cursor-pointer active:scale-95 '
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
  return (
    <button>Click me</button>
  )
}

export default Button;