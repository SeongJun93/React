
import './App.css';
import OnClickEvent from './component/OnClickEvent';
import UseStateEvent from './component/UseStateEvent';
import Props from './component/Props';

function App() {
  return (
    <div className="App">
      <OnClickEvent />
      <UseStateEvent />
      <Props age={10} />
      <Props age={20} />
    </div>
  );
}

export default App;
