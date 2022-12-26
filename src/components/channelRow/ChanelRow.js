import React from "react";

import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "./ChanelRow.css";
import { Button } from "@mui/material";

const ChanelRow = ({
  img,
  numVideo,
  chanel,
  descri,
  subs,
  verify,
  channelId,
}) => {
  return (
    <div
      className="chanelrow"
      onClick={() =>
        window.open(`https://www.youtube.com/channel/${channelId}`)
      }
    >
      <Avatar src={img} alt={chanel} className="logo" />
      <div className="info">
        <h1>
          {chanel} {verify && <VerifiedUserIcon />}{" "}
        </h1>
        <p>{`@bue221 • ${subs} subcribes `}</p>
        <p className="description">{descri}</p>
      </div>
      <Button variant="contained" color="error">
        Subcribe
      </Button>
    </div>
  );
};

export default ChanelRow;
