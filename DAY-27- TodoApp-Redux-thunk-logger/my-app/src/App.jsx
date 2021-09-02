import './App.css';
import { incNumber, decNumber } from "./store/actions";
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter Using React Redux</h1>
      <button onClick={() => dispatch(decNumber())} >-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(incNumber())}>+</button>
    </div>
  );
}

export default App;
