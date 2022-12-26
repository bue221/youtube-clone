import React from "react";
import "./VideoCard.css";
//
import { Box, Avatar, Typography } from "@mui/material";

const VideoCard = ({ image, title, chanel, Cimg, time, views, videoId }) => {
  return (
    <div
      className="cardvideo"
      onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`)}
    >
      <Box
        component="img"
        src={Cimg}
        alt={title}
        width={"309px"}
        height={"171px"}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoC95gZ_4nrQP7wc1QSCMCyQv2D5gnpwmgP0hT-q8RtidplpA1AusuCAL8ja-eJas7S0&usqp=CAU";
        }}
        sx={{
          objectFit: "cover",
          borderRadius: 4,
        }}
      />
      <div className="info-l">
        <Avatar className="avatar" variant="circular" src={Cimg} alt={chanel} />
        <div>
          <p className="title-video">{title}</p>
          <Typography variant="body1" fontSize="12px" noWrap maxWidth={220}>
            {chanel}
          </Typography>
          <Typography
            variant="body1"
            fontSize="12px"
            noWrap
            maxWidth={220}
          >{`${views} views • ${time}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
