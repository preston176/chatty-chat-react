
import './App.css'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={(
          <div className='app'>

            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              <Chat />
            </div>
          </div>

        )} />
        <Route path='/' element={(
          <h1>Home Screen</h1>
        )} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
