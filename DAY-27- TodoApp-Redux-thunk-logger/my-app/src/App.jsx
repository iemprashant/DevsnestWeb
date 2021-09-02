import './App.css';
import { incNumber, decNumber } from "./store/actions";
import { useSelector, useDispatch } from 'react-redux';
import AddComponent from './Components/Addcomponent';
import ShowlistComponent from './Components/showlistComponent';
function App() {
  return (
    <div className="App container text-center bg-light d-flex flex-column mt-5 rounded shadow">
      <h1 class="m-4">What's Up Today?👽</h1>
      <AddComponent />
      <ShowlistComponent />
    </div>
  );
}

export default App;
