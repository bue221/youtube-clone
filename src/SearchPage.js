import React from 'react';

import './SearchPage.css'
import ChanelRow from './ChanelRow'
import VideoRow from './VideoRow'

import TuneIcon from '@material-ui/icons/Tune';

const SearchPage = ({open, data})=>{


        return(
                <div className={`searchpage ${open && "all"}`}>
                        <div className="filter">
                                <TuneIcon />
                                <h4>Filter</h4>
                        </div>
                        <ChanelRow
                        subs='660K'
                        verify
                        chanel='Andres Plaza'
                        descri='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training'
                        numVideo={382}
                        img='https://e7.pngegg.com/pngimages/411/56/png-clipart-symbol-logo-black-triangle-sign-information-traingle-miscellaneous-angle.png'/>
                        <hr />

                        {data ? data.map(i=>(

                        <VideoRow
                        key= {i.etag}
                        title= {i.snippet.title}
                        img= {i.snippet.thumbnails.medium.url}
                        subs= '670K'
                        descrip= {i.snippet.description}
                        time='2 hours ago'
                        views={456}
                        chanel={i.snippet.channelTitle}/>

                        )): <h1> No hay datos buscados</h1>}

                </div>
                );
                        }

export default SearchPage
