import './App.css';
import Endpoint from './Components/Endpoint';
import EndpointsTable from './Components/EndpointsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
        hello
        {/* <Endpoint url="https://trips-api.productivitytools.top/api/debug/date"></Endpoint> */}
        <EndpointsTable></EndpointsTable>
    </div>
  );
}

export default App;
