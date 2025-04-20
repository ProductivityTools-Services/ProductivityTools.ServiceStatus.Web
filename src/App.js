import './App.css';
import Endpoint from './Components/Endpoint';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        hello
        <Endpoint url="https://trips-api.productivitytools.top/api/debug/date"></Endpoint>
      </body>
    </div>
  );
}

export default App;
