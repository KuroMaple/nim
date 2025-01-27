import { FC } from 'react'
import { Link } from 'react-router'

type ButtonProps = {
  text: string;
  onClick?: () => void;
}

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
const Button: FC<ButtonProps> = ({
  text,
}) => {
  
  if (text === 'singleplayer') {
    return (
      <Link to='/singleplayer'
        className='bg-rose-50 text-black rounded-4xl px-6 py-2.5 font-montserrat text-2xl opacity-80 hover:opacity-100 cursor-pointer active:scale-95 text-center w-64'
      >
        {capitalize(text)}
      </Link>
    )
  }
  else if (text === 'multiplayer') {
    return (
      <Link to='/multiplayer'
        className='bg-rose-50 text-black rounded-4xl px-6 py-2.5 font-montserrat text-2xl opacity-80 hover:opacity-100 cursor-pointer active:scale-95 text-center w-64'
      >
        {capitalize(text)}
      </Link>
    )
  }
  return (
    <button>Click me</button>
  )
}

export default Button;