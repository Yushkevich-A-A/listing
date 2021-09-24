import './App.css';
import dataJSON from './components/data/data.json';
import Listing from './components/Listing/Listing';


const data = dataJSON;

console.log(data);

function App() {
  return (
    <Listing data={data}/>
  );
}

export default App;
