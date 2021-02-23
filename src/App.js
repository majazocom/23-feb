import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent max="10" />
      <FunctionalComponent start="0" />
    </div>
  );
}

export default App;
