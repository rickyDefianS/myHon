import './App.css';
import 'bulma/css/bulma.min.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import {Home, Favorite} from './pages';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="favorite" element={<Favorite />}/>
      </Routes>
    </div>
  );
}

export default App;
