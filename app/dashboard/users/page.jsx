import React from 'react'
import styles from "./users.module.css"
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/pagination/Pagination'
import {fetchUsers} from '@/app/lib/data'


const UsersPage = async() => {
  const users=await fetchUsers();
  console.log(users);
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
          {users.map(user=>(
            <tr key={user.id}>
                <td>
                    <div className={styles.user}>
                    <Image src={user.img ||"/noavatar.png"} alt="" width={40} height={40} className={styles.userImage}/>
                    {user.name}
                 </div>
              </td>
              <td>{user.email}</td>
              <td>23.04.455</td>
              <td>{user?.isAdmin}</td>
              <td>{user?.isActive}</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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