import './App.css';
import Navbar from './components/Navbar.js'
import Section01 from './components/Section01.js'
import Section02 from './components/Section02.js'
import Section03 from './components/Section03.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section01/>
      <Section02/>
      <Section03/>
    </div>
  );
}

export default App;
