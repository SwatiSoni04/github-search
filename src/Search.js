import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Combobox from "react-widgets/Combobox";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

function Search() {
  const [language, setLanguage] = useState("");
  const [searchIp, setSearchIp] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const onLanguageSelect = (e) => {
    setLanguage(e);
  };

  const onTextChange = (e) => {
    setSearchIp(e.target.value);
  };

  const onSearch = (e) => {
    const queryString = `q=${searchIp}+language:${language}&sort=stars&order=desc`;
    const url = `https://api.github.com/search/repositories?${queryString}`;
    
    axios.get(url)
      .then(response => {
        setData(response.data);
        sessionStorage.setItem("filteredResults",filteredResults);
        sessionStorage.setItem("gitHubResponseData",JSON.stringify(response.data));
        navigate("/results");
      })
  };

  return (  
    <React.Fragment>
      <Combobox
        data={["Javascript", "Assembly"]}
        placeholder="Search Language..."
        onChange={onLanguageSelect} 
      />
      <div style={{padding:"20px 0 0 0"}}>
        <input 
          type="text"
          name="searchInput"
          placeholder="Search..."
          value={searchIp}
          onChange={onTextChange}
          style={{width:"100%"}}
        />
      </div>
      <div style={{padding:"20px 0 0 0"}}>
        <Button onClick={onSearch}>Search</Button>
      </div>
      </React.Fragment>
  );
}

export default Search;
