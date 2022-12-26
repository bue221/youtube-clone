import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";

import SidebarRow from "../sidebarRow/SidebarRow";
//
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = ({ open }) => {
  return (
    <div className={`sidebar ${open && "close"}`}>
      <Link className="link">
        <SidebarRow select title="Home" Icon={HomeIcon} />
      </Link>
      <SidebarRow title="trending" Icon={SubscriptionsIcon} />
      <SidebarRow title="subcribe" Icon={WhatshotIcon} />
      <hr />
      <SidebarRow title="library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your videos" Icon={LiveTvOutlinedIcon} />
      <SidebarRow title="Liked Videos" Icon={FavoriteIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreIcon} />
      <hr />
    </div>
  );
};

export default Sidebar;
