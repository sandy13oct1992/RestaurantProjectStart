import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header.js';
import Meals from './component/Meals/Meals.js';
function App() {
  return (
    <div >
      <Header/>
      <main>
      <Meals/>
      </main>
    </div>

  );
}

export default App;
