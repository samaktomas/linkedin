import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const dispatch = useDispatch();
  const logoutOfAp = () => {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfAp} />
      </div>
    </div>
  );
}
