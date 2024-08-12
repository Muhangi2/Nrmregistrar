import React from 'react'
import styles from "./transactions.module.css"
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Pagination from '@/app/ui/pagination/Pagination'
import {fetchUsers} from '@/app/lib/data'
import { fetchCollegeData } from '@/app/lib/data'

const UsersPage = async() => {
  
      const data = await fetchCollegeData();
      console.log(data,"datata")
      
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       <Search placeholder="Search for a user..."/>
       {/* <div className={styles.topRight}>
          <form action={exportToExcel}>
            <button type="submit" className={styles.exportButton}>
              Export Excel
            </button>
          </form>
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div> */}
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>College</td>
                <td>Male</td>
                <td>Female</td>
                <td>Total</td>
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
      <Pagination/>
    </div>
  )
}

export default UsersPage