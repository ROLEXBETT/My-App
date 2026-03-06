import './App.css';
import FirstComponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponents';
import Sixthcomponent from './components/Sixthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning react js</h1>
        <h2>React is Fun</h2>
      </header>
      
      {/* Below we render/display/show our component */}
      <FirstComponent />
      <Secondcomponent />
      <Contactus />
      <Help/>
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
      <Sixthcomponent/>
    </div>
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