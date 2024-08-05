import React from 'react'
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '@/app/ui/pagination/Pagination'
import Link from 'next/link'
import styles from "./transactions.module.css"
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
     <Search placeholder="Search for a user..."/>
     <Link href="/dashboard/users/add">
       <button  className={styles.addButton}>Add New</button>
     </Link>
    </div>
    <table className={styles.table}>
      <thead>
          <tr>
              <td>Name</td>
              <td>Email</td>
              <td>CreatedAt</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div className={styles.user}>
                  <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                  Eliod 
               </div>
            </td>
            <td>eliod@gmail.com</td>
            <td>23.04.455</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
              
            </td>
          </tr>
      </tbody>
    </table>
    <Pagination/>
  </div>
  )
}

export default Transactions