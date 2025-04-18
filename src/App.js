import './App.css';
import Home from './pages/Home.js';
import About  from './pages/About.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    

      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Home></Home>}/>

          <Route path='/about' element={<About></About>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
