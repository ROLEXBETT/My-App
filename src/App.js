import './App.css';
import FirstComponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponents';
import Sixthcomponent from './components/Sixthcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';


function App() {
  return (
   <Router> 
    <div className="App">
      <nav>
        <Link to="first" className='navlinks'>First</Link>
        <Link to="second" className='navlinks'>Second</Link>
        <Link to="third" className='navlinks'>Third</Link>
        <Link to="fourth" className='navlinks'>Fourth</Link>
        <Link to="fifth" className='navlinks'>Fifth</Link>
        <Link to="sixth" className='navlinks'>Sixth</Link>
        <Link to="help" className='navlinks'>Help</Link>
        <Link to="contactus" className='navlinks'>Contactus</Link>
      </nav>
      <header className="App-header">
        <h1>Welcome to learning react js</h1>
        <h2>React is Fun</h2>
      </header>
      
      {/* Below we render/display/show our component */}
      <Routes>
        <Route path="/first" element={<FirstComponent/>} />
        <Route path="/second" element={<Secondcomponent/>} />
        <Route path="/third" element={<Thirdcomponent/>} />
        <Route path="/fourth" element={<Fourthcomponent/>} />
        <Route path="/fifth" element={<Fifthcomponent/>} />
        <Route path="/sixth" element={<Sixthcomponent/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path='*' element={<Notfound/>} />



      </Routes>

    </div>
    </Router>
  );
}

export default App;

// JSX

//npm start => node package module
//npx => node package execute

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// This is our entry comment