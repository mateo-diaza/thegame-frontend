import './App.css';
import {MainPage} from "./components/MainPage/MainPage";
import {HomeButtons} from "./components/HomeButtons/HomeButtons";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>The Game Proyect</h1>
        </header>
        <HomeButtons/>
        <hr/>
        <MainPage/>
        <hr/>
        <footer className="App-footer">
          <p>
            Created by Mateo Díaz - mateodiazallegue@gmail.com
          </p>
        </footer>
      </div>
  );
}

export default App;