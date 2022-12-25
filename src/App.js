import React, { useState } from "react";
import "./App.css";
// API
import youtube from "./api/youtube";
// COMPONENT'S
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecomendV from "./components/recomendV/RecomendV";
import SearchPage from "./components/searchPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  const boton = () => setOpen(!open);

  const submit = async () => {
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: [`${process.env.REACT_APP_YOUTUBE_API_KEY}`],
        q: value,
      },
    });
    setData(res.data.items);
    setValue("");
  };

  const cambio = (e) => setValue(e.target.value);

  return (
    <div className="App">
      <Router>
        <Header boton={boton} cambio={cambio} value={value} submit={submit} />
        <Switch>
          <Route path="/search">
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
