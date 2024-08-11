import React from 'react'
import styles from "./users.module.css"
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/pagination/Pagination'
import {fetchUsers} from '@/app/lib/data'

const UsersPage = async() => {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       <Search placeholder="Search for a user..."/>
       <Link href="/dashboard/users/add">
         <button className={styles.addButton}>Add New</button>
       </Link>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>First Name</td>
                <td>Second Name</td>
                <td>Student Number</td>
                <td>Hall of Residence</td>
                <td>College</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.secondname}</td>
                <td>{user.studentNumber}</td>
                <td>{user.residencehall}</td>
                <td>{user.college}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default UsersPage