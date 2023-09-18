import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__body">
          <Routes>
            <Route path="/" element={<h1>Home Screen</h1>} />
            <Route path="/app" element={(
              <>
                <Sidebar />
                <Chat />
              </>

            )} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
