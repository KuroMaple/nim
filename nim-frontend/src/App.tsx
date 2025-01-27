import backgroundImage from './assets/MainBackground.png';

function App() {

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <img
          src={backgroundImage}
          alt="Game Background"
          className="w-full h-full object-fill"
        />
        {/* Your game content */}
      </div>
    </>
  )
}

export default App
