import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import "./_mode.scss";
import {
  setModeDark,
  setModeLight,
} from "../usage/redux/reducers/modeReducers";

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  const toggleDarkMode = () => {
    // You can also save this preference in local storage or a global state management tool
    mode === "light" ? dispatch(setModeDark()) : dispatch(setModeLight());
  };

  return (
    <IconButton
      style={{ position: "fixed", zIndex: 10, top: "10px" }}
      color="inherit"
      onClick={toggleDarkMode}
    >
      {mode === "light" ? (
        <Brightness7Icon fontSize="large" style={{ color: "yellow" }} />
      ) : (
        <Brightness4Icon fontSize="large" style={{ color: "white" }} />
      )}
    </IconButton>
  );
};

export default DarkModeSwitch;
