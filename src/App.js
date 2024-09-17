import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>

  );
}

export default App;
