import React from 'react'
import styles from "./transactions.module.css"
import { fetchCollegeData } from '@/app/lib/data'
import Pagination from '../../pagination/Pagination'

const Collegepage = async () => {
  const data = await fetchCollegeData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>College Statistics</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>College</th>
              <th>Male</th>
              <th>Female</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(user => (
              <tr key={user.id}>
                <td>{user.college}</td>
                <td>{user.males}</td>
                <td>{user.females}</td>
                <td>{user.totalStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  )
}

export default Collegepage