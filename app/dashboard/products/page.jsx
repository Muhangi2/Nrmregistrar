import React from 'react'
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '@/app/ui/pagination/Pagination'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./products.module.css"

const Products = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
     <Search placeholder="Search for a Product..."/>
     <Link href="/dashboard/products/add">
       <button  className={styles.addButton}>Add New</button>
     </Link>
    </div>
    <table className={styles.table}>
      <thead>
          <tr>
              <td>title</td>
              <td>Description</td>
              <td>Price</td>
              <td>CreatedAt</td>
              <td>Stock</td>
              <td>Action</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div className={styles.user}>
                  <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                  Omega
               </div>
            </td>
            <td>This is about the wine </td>
            <td>$45</td>
            <td>23.04.455</td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/dashboard/products/test">
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

export default Products