import React, { useEffect, useState } from "react";

import "./RecomendV.css";
import VideoCard from "../videoCard/VideoCard";
import youtube from "../../api/youtube";

const RecomendVideos = ({ open }) => {
  // states
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  //
  const handleSubmit = async (value) => {
    setLoading(true);
    try {
      const res = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 20,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: value,
        },
      });
      setData(res.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //
  useEffect(() => {
    handleSubmit("aprender a programar");
  }, []);

  return (
    <div className={`recomendV ${open && "all"}`}>
      {/* <h1>Recomended</h1> */}
      <div className="videos">
        {data &&
          data.map(
            (i) =>
              i.id.kind !== "youtube#channel" && (
                <VideoCard
                  key={i.etag}
                  title={i.snippet.title}
                  img={i.snippet.thumbnails.default.url}
                  Cimg={i.snippet.thumbnails.medium.url}
                  time="2 hours ago"
                  views={456}
                  chanel={i.snippet.channelTitle}
                  videoId={i.id.videoId}
                />
              )
          )}
      </div>
    </div>
  );
};

export default RecomendVideos;
