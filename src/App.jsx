import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" />
            <Route path="/app" element={(
              <>
                <Chat />
              </>

            )} />
            <Route path='/rooms/:roomId' element={(
              <Chat />
            )} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
