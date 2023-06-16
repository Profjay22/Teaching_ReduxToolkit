
import './App.css';
import Login from './component/Login';
import Profiles from './component/Profiles';
import ChangeColor from './component/ChangeColor';
import ChangeTextSize from './component/ChangeTextSize';
function App() {

  return (
    <div className="App">
        <ChangeColor/>
        <Profiles/>
        <Login/>
        <ChangeTextSize/>
    </div>
  );
}

export default App;
