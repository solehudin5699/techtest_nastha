import React from "react";
import styles from "./dashboard.module.css";
import { Table } from "react-bootstrap";
import Pagination from "../../components/Dashboard/Pagination";
export default function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containertable}>
          <div className={styles.line}>
            <input className={styles.input} placeholder='Search' />
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
                <tr className={styles.rowbody}>
                  <td>1</td>
                  <td>Acara maulidan</td>
                  <td>Cirebon</td>
                  <td>12 Desember</td>
                  <td>siapa ya</td>
                  <td>Blabalaa baakn avjajj</td>
                </tr>
                <tr className={styles.rowbody}>
                  <td>1</td>
                  <td>Acara maulidan</td>
                  <td>Cirebon</td>
                  <td>12 Desember</td>
                  <td>siapa ya</td>
                  <td>Blabalaa baakn avjajj</td>
                </tr>
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
