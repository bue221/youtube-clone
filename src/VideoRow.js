import React from 'react'

import './VideoRow.css'

const VideoRow = ({views, subs, chanel,descrip, time,img, title})=>{
        return(
                <div className='VideoRow'>
                        <img src={img} alt={title} />
                        <div className="info">
                                <h3>{title}</h3>
                                <h5>{chanel}</h5>
                                <p>{subs} subscriptions - {views} views - {time}</p>
                                <p>
                                        {descrip}
                                </p>
                        </div>
                </div>
        );
}

export default VideoRow;
