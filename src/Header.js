import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


import VideoCallIcon from '@material-ui/icons/VideoCall';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'

const Header = ({boton,cambio, value, submit})=>{



        return(
                <div className='header'>
                        <div className="header-left">
                                <IconButton onClick={boton}>
                                        <MenuIcon />
                                </IconButton>
                                <Link to='/'>
                                        <img 
                                        className='header-logo'
                                        src="https://www.marketingdirecto.com/wp-content/uploads/2017/08/youtube-2.jpg" 
                                        alt="logo" />

                                </Link>
                        </div>
                        <div className="header-center"> 
                                <input
                                onChange={cambio}
                                value={value}
                                type="text" 
                                placeholder='Search' />

                                <IconButton onClick={submit}>
                                        <Link to={`/search/${value}`} className='search'>
                                                <SearchIcon />
                                        </Link>
                                </IconButton>
                        </div>
                        <div className="header-rigth"> 
                                <VideoCallIcon />
                                <AppsIcon />
                                <NotificationsIcon />
                                <Avatar src='https://lh3.googleusercontent.com/ogw/ADGmqu-5rBRGlgF_0Etdy2I-L-xcArNnYRofczW1LSaL=s83-c-mo'/>

                        </div>
                </div>
                );
}

export default Header;
