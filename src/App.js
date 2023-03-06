import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";
import {UserProvider} from "./components/UserContext/UserContext";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>The Game Proyect</h1>
            </header>
            <UserProvider>
                <MainPage/>
            </UserProvider>
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