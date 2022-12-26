import React, { useState } from "react";
import "./App.css";
// API
import youtube from "./api/youtube";
// COMPONENT'S
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecomendV from "./components/recomendV/RecomendV";
import SearchPage from "./components/searchPage/SearchPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams,
} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  //
  const history = useHistory();
  //
  const toggleSideBar = () => setOpen(!open);
  const handleChange = (e) => setValue(e.target.value);
  //
  const submit = async () => {
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: `AIzaSyAhJAhgZl99mTlTaQnRa9afusD9oBqzY1M`,
        q: value,
      },
    });
    setData(res.data.items);
    setValue("");
  };

  return (
    <div className="App">
      <Router>
        <Header
          boton={toggleSideBar}
          cambio={handleChange}
          value={value}
          setValue={setValue}
          submit={submit}
        />
        <Switch>
          <Route path="/search/:value">
            <div className="app-page">
              <Sidebar open={open} />
              <SearchPage open={open} data={data} />
            </div>
          </Route>
          <Route path="/">
            <div className="app-page">
              <Sidebar open={open} />
              <RecomendV open={open} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
