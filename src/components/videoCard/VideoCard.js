import React from 'react'
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({image, title, chanel,Cimg, time,views}) =>{
        return(
                <div className='cardvideo'>
                        <img src={image} alt={title} />
                        <div className="info-l">
                                <Avatar className='avatar' src={Cimg} alt={chanel} />
                                <div>
                                        <h4>{title}</h4>
                                        <p>{chanel}</p>
                                        <p>
                                            {views} - {time}
                                        </p>
                                 </div>
                        </div>
                </div>
        );
}

export default VideoCard;
