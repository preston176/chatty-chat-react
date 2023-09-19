import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Components/Login';


function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/app" element={<Chat />} />
              <Route path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
