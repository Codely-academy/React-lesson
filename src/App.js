import './App.css';
import Box from './components/Box';
const App = () => {

  console.log("HELLOO APP.JS");

  return (
    <div>
      <h1>HELLOO</h1>
      <div className='container'>
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default App;
