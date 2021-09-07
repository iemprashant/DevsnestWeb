import './App.css';
import PlaceForm from './Components/form';
import WeatherCard from './Components/weathercard';
function App() {
  return (
    <div className="App container text-center d-flex justify-content-center flex-column">
      <div className=" App-content container bg-light d-flex flex-column rounded shadow px-4 py-5">
        <h3 class="m-3">Alexa 🙋‍♀️ , What's The Weather Today ⛅ </h3>
        <PlaceForm />
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
