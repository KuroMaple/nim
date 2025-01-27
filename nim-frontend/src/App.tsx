import backgroundImage from './assets/MainBackground.png';

function App() {

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <img
          src={backgroundImage}
          alt="Game Background"
          className="w-full h-full object-fill absolute pointer-events-none"
        />
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36'
        >
          <h1 className="text-9xl font-montserrat text-figma-brown">Nim</h1>
        </div>
      </div>
    </>
  )
}

export default App
