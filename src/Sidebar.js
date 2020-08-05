import React from 'react'
import './Sidebar.css'

import { Link } from 'react-router-dom'

import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = ({open})=>{
        return(
                <div className={`sidebar ${open && "close"}`}>
                        <Link className='link'>
                                <SidebarRow select title='Home' Icon={HomeIcon} />
                        </Link>
                        <SidebarRow title='trending' Icon={SubscriptionsIcon}/>
                        <SidebarRow title='subcribe' Icon={WhatshotIcon}/>
                        <hr />
                        <SidebarRow title='library' Icon={VideoLibraryIcon}/>
                        <SidebarRow title='History' Icon={HistoryIcon}/>
                        <SidebarRow title='Your videos' Icon={LiveTvOutlinedIcon}/>
                        <SidebarRow title='Liked Videos' Icon={FavoriteIcon}/>
                        <SidebarRow title='Show more' Icon={ExpandMoreIcon}/>
                        <hr />

                </div>
                );
}

export default Sidebar;
