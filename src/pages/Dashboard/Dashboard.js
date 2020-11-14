import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Dashboard/Pagination";
import { getEventCreator } from "../../redux/actions/event";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventCreator("", 5, 1));
  }, [dispatch]);
  const { event } = useSelector((state) => state.event);

  const handelSearch = (e) => {
    let key = e.target.value;
    if (e.key === "Enter") {
      dispatch(getEventCreator(key, 1));
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containertable}>
          <div className={styles.line}>
            <input
              className={styles.input}
              placeholder='Search'
              onKeyPress={(e) => handelSearch(e)}
            />
          </div>

          <div className={styles.contenttable}>
            <Table responsive='md' className={styles.table} borderless>
              <thead>
                <tr className={styles.headertable}>
                  <th style={{ width: "10%", border: "none" }}>No</th>
                  <th className={styles.column}>Title</th>
                  <th className={styles.column}>Location</th>
                  <th className={styles.column}>Date</th>
                  <th className={styles.column}>Participant</th>
                  <th className={styles.column}>Note</th>
                </tr>
              </thead>
              <tbody>
                {event.map((item, index) => {
                  return (
                    <tr className={styles.rowbody}>
                      <td>{index + 1} </td>
                      <td>{item.title}</td>
                      <td>{item.location}</td>
                      <td>{item.date}</td>
                      <td>{item.participant}</td>
                      <td>{item.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <div className={styles.line}>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
