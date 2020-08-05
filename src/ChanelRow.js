import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './ChanelRow.css'

const ChanelRow = ({img,numVideo, chanel,descri, subs, verify})=>{
        return(
                <div className='chanelrow'>
                    <Avatar src={img} alt={chanel} className='logo'/>
                    <div className="info">
                            <h1>{chanel} {verify && <VerifiedUserIcon/> } </h1>
                            <p>{subs} subcribes - {numVideo} videos</p>
                            <p>{descri}</p>
                    </div>
                </div>
        );
}

export default ChanelRow;
