import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import HomePage from './Components/HomePage';


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<HomePage />} />
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
