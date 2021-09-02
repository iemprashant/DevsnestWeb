import './App.css';
import { incNumber, decNumber } from "./store/actions";
import { useSelector, useDispatch } from 'react-redux';
import AddComponent from './Components/Addcomponent';
import ShowlistComponent from './Components/showlistComponent';
function App() {
  return (
    <div className="App">
      <h1>ToDo list</h1>
      <AddComponent />
      <ShowlistComponent />
    </div>
  );
}

export default App;
