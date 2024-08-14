import React from 'react'
import styles from "./users.module.css"
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Pagination from '@/app/ui/pagination/Pagination'
import {fetchUsers} from '@/app/lib/data'
import { exportToExcel } from '@/app/lib/action'

const UsersPage = async(searchParams) => {
//we used q instead of query
  const q=searchParams?.searchParams?.q||"";
  const page=searchParams?.searchParams?.page||1;

  const {voters,count} = await fetchUsers(q,page);
  console.log(voters,"usersssssss");
  console.log(count,"counttttttttttt");
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       <Search placeholder="Search for a user..."/>
       <div className={styles.topRight}>
          <form action={exportToExcel}>
            <button type="submit" className={styles.exportButton}>
              Export Excel
            </button>
          </form>
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>FirstName</td>
                <td>SecondName</td>
                <td>Gender</td>
                <td>StdNo</td>
                <td>ResidenceHall</td>
                <td>College</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
          {voters?.map(user => (
            <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.secondname}</td>
                <td>{user.gender}</td>
                <td>{user.studentNumber}</td>
                <td>{user.residencehall}</td>
                <td>{user.college}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      {/* <button className={`${styles.button} ${styles.view}`}>View</button> */}
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default UsersPage