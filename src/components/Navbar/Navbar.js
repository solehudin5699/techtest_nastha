import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import eventLogo from "../../assets/image/event.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, [window.location.pathname]);
  console.log(pathname);
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => setPathname("/")}>
        <Link
          style={{
            outline: "none",
            color: "#FFFFFF",
            textDecoration: "none",
          }}
          to='/'>
          <img src={eventLogo} alt='' className={styles.eventLogo} />
          <span className={styles.labelLogo}>Event Manager</span>
        </Link>
      </div>
      <div className={styles.menus}>
        <div
          onClick={() => setPathname("/addevent")}
          className={
            pathname === "/addevent" ? styles.menuselect : styles.menu
          }>
          <Link
            style={{
              outline: "none",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
            to='/addevent'>
            <i
              className={styles.addvent}
              className='fa fa-plus'
              aria-hidden='true'></i>{" "}
            Add Event
          </Link>
        </div>
        <div
          onClick={() => setPathname("/dashboard")}
          className={
            pathname === "/dashboard" ? styles.menuselect : styles.menu
          }>
          <Link
            style={{
              outline: "none",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
            to='/dashboard'>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
