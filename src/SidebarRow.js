import React from 'react'

import './Sidebar.css'

const SidebarRow = ({title, Icon, select})=>{
        return(
                <div className={`sidebarRow ${select && "select"}`} >
                        <Icon className='row-icon' />
                        <h2 className='row-title'>{title}</h2>
                </div>
        );
}

export default SidebarRow;
