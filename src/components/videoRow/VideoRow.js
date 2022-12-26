import { Avatar, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import "./VideoRow.css";

const VideoRow = ({
  views,
  subs,
  chanel,
  descrip,
  time,
  img,
  title,
  videoId,
}) => {
  return (
    <div
      className="VideoRow"
      onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`)}
    >
      <Box sx={{ borderRadius: 4 }} component="img" src={img} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>{`${views} views • ${time}`}</p>
        <Stack direction="row" alignItems="center" gap={1} my={1}>
          <Avatar src={img} sx={{ width: "25px", height: "25px" }} />
          <Typography fontSize="12px" width={240} noWrap>
            {chanel}
          </Typography>
        </Stack>
        <Typography fontSize="18px" width="60%" noWrap>
          {descrip}
        </Typography>
      </div>
    </div>
  );
};

export default VideoRow;
