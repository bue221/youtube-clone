import React, { useEffect, useState } from "react";

import "./SearchPage.css";
import ChanelRow from "../channelRow/ChanelRow";
import VideoRow from "../videoRow/VideoRow";

import TuneIcon from "@mui/icons-material/Tune";
import { useParams } from "react-router-dom";
import youtube from "../../api/youtube";

const SearchPage = ({ open }) => {
  // states
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const handleSubmit = async (value) => {
    setLoading(true);
    try {
      const res = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: `AIzaSyAhJAhgZl99mTlTaQnRa9afusD9oBqzY1M`,
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

  useEffect(() => {
    if (params.value) handleSubmit(params.value);
  }, [params]);

  return (
    <div className={`searchpage ${open && "all"}`}>
      <div className="filter">
        <TuneIcon />
        <h4>Filter</h4>
      </div>
      <ChanelRow
        subs="660K"
        verify
        chanel="Andres Plaza"
        descri="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
        numVideo={382}
        img="https://e7.pngegg.com/pngimages/411/56/png-clipart-symbol-logo-black-triangle-sign-information-traingle-miscellaneous-angle.png"
      />
      {data &&
        data.map(
          (i) =>
            i.id.kind === "youtube#channel" && (
              <ChanelRow
                subs="660K"
                chanel={i.snippet.channelTitle}
                verify
                descrip={i.snippet.description}
                numVideo={382}
                img={i.snippet.thumbnails.medium.url}
                channelId={i.id.channelId}
              />
            )
        )}
      <hr />
      {data ? (
        data.map(
          (i) =>
            i.id.kind !== "youtube#channel" && (
              <VideoRow
                key={i.etag}
                title={i.snippet.title}
                img={i.snippet.thumbnails.medium.url}
                subs="670K"
                descrip={i.snippet.description}
                time="2 hours ago"
                views={456}
                chanel={i.snippet.channelTitle}
                videoId={i.id.videoId}
              />
            )
        )
      ) : (
        <h1> No hay datos buscados</h1>
      )}
    </div>
  );
};

export default SearchPage;
