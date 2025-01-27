import backgroundImage from '../../assets/MainBackground.png';
import GeneralButton from '../Common/Button/Button'

const MainMenu = () => {
  return(
    <div className="h-screen w-screen overflow-hidden select-none">
        <img
          src={backgroundImage}
          alt="Game Background"
          className="w-full h-full object-fill absolute pointer-events-none"
        />
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36 h-96 flex flex-col justify-between'
        >
          <h1 className="text-9xl font-montserrat text-figma-brown">Nim</h1>

          <div className="flex flex-col gap-4 mt-8 ">
            <GeneralButton text='singleplayer' />
            <GeneralButton text='multiplayer' />
          </div>
        </div>
    </div>
  )
}

export default MainMenu
