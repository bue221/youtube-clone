import React, { useState } from 'react';
import './App.css';

import youtube from './api/youtube'

import Header from './Header'
import Sidebar from './Sidebar'
import RecomendV from './RecomendV'
import SearchPage from './SearchPage'

import {
        BrowserRouter as Router,
        Switch,
        Route
} from "react-router-dom";

function App() {

        const [open, setOpen] = useState(false);

        const boton = ()=>{
                setOpen(!open)
        }

        const [value, setValue ] = useState('');
        const [data, setData ] = useState('');
        //console.log()
        console.log(data);

        const submit = async() =>{
                const res = await youtube.get('search',
                        {
                                params:{
                                        part: 'snippet',
                                        maxResults: 10,
                                        key: [api-key],
                                        q: value
                                }
                        } );
                setData(res.data.items);
                setValue('')
                //console.log(res.data);
        }

        const cambio = (e)=>{
                setValue(e.target.value)
        }


        return (
                <div className="App">
                        <Router>
                                <Header boton={boton} cambio={cambio} value={value} submit={submit}/>
                                <Switch>
                                        <Route path="/search">
                                                <div className="app-page">
                                                        <Sidebar open={open}/>
                                                        <SearchPage open={open} data={data}/>
                                                </div>
                                        </Route>
                                        <Route path="/">
                                                <div className="app-page">
                                                        <Sidebar open={open}/>
                                                        <RecomendV open={open}/>
                                                </div>
                                        </Route>
                                </Switch>
                        </Router>
                </div>
                );
}

export default App;
