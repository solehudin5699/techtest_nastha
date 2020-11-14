import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Table, Pagination } from "react-bootstrap";
import styles from "./pagination.module.css";
import { getEventCreator } from "../../redux/actions/event";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  // let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setActive(number);
          dispatch(getEventCreator("", 5, number));
        }}
        style={{
          border: "none",
          borderCollapse: "collapse",
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
        key={number}
        active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <Pagination
          style={{ border: "none", borderCollapse: "collapse" }}
          size='md'>
          <button className={styles.btn} style={{ outline: "none" }}>
            <i
              style={{ fontSize: "45px" }}
              className='fa fa-caret-left fa-lg'
              aria-hidden='true'></i>
          </button>
          {items}
          <button className={styles.btn} style={{ outline: "none" }}>
            <i
              style={{ fontSize: "45px" }}
              className='fa fa-caret-right fa-lg'
              aria-hidden='true'></i>
          </button>
        </Pagination>
      </div>
    </>
  );
}
