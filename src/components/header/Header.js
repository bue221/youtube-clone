import React from "react";
import { Link, useHistory } from "react-router-dom";
//
import "./Header.css";
//
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
//
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";

const Header = ({ boton, cambio, value, setValue }) => {
  const history = useHistory();
  const submit = () => {
    history.push({ pathname: `/search/${value}` });
    setValue("");
  };

  return (
    <div className="header">
      <div className="header-left">
        <IconButton onClick={boton}>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img
            className="header-logo"
            src="https://www.marketingdirecto.com/wp-content/uploads/2017/08/youtube-2.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-center">
        <TextField
          variant="outlined"
          size="small"
          onChange={cambio}
          value={value}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          type="text"
          placeholder="Search"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 10,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={submit}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="header-rigth">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-5rBRGlgF_0Etdy2I-L-xcArNnYRofczW1LSaL=s83-c-mo" />
      </div>
    </div>
  );
};

export default Header;
