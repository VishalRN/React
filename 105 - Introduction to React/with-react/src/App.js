import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';

function App() {
  // create a new state called value which can be changed using setValue and is initialized to 0
  // A variable which can be changed and use in our DOM is called state
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      {/* passing the data through props to the Navbar component */}
      <Navbar logoText="CodeWithCWHHarry" />
      <div className='value'> {value}</div>
      <button onClick={() => { setValue(value + 1) }}>Click me</button>
      <Footer />
    </div>
  );
}

export default App;
