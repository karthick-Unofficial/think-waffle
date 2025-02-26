import './App.css';
import AppBarComponent from "./Components/AppBar";
import About from "./Components/About";
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <AppBarComponent />
      <About />
      <Categories />
    </div>
  );
}

export default App;
