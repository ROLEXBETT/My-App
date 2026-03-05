import './App.css';
import FirstComponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';

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
    </div>
  );
}

export default App;

// JSX
// Create two other components i.e Contactus and Help components and style them with your own content.render them on app.js componet.