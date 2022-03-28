import logo from './logo.svg';
import './App.css';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";
import SearchResults from "./SearchResults";
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';

function App() {
  /*const location = useLocation();
  const filteredResults = location.state.filteredResults;
  const data = location.state.data;
  console.log("filteredResults", filteredResults, data);*/
  //const filteredResults = sessionStorage.getItem("filteredResults");
  //const gitHubResponseData = JSON.parse(sessionStorage.getItem("gitHubResponseData"));
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/results" element={<SearchResults/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
