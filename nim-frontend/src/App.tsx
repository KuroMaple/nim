import { Link, Route, Routes } from 'react-router'
import MainMenu from './components/MainMenu/MainMenu'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route 
          path="*" 
          element={
            <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
              <h1 className="text-5xl font-bold mb-4 font-montserrat">Under Construction</h1>
              <p className="text-lg text-gray-700 mb-6 font-montserrat">This page is currently being built. Come back later!</p>
              <Link 
                to="/" 
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Go Back
              </Link>
            </div>
          }
        />
      </Routes>

    </>
  )
}

export default App
