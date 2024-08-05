import React from 'react'
import styles from  "./transactions.module.css"
import Image from 'next/image'
const Transactions = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       <div className={styles.user}>
                       <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                         John Doe
                        </div>
                    </td>
                    <td >
                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                    <td>12.95.2024</td>
                    <td>$67436</td>
                </tr> 
                <tr>
                    <td>
                       <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/> 
                        John Doe
                        </div>
                    </td>
                    <td >
                        <span className={`${styles.status} ${styles.pending}`}>cancelled </span>
                        </td>
                    <td>12.95.2024</td>
                    <td>$67436</td>
                </tr>
                <tr>
                    <td >
                       <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                        John Doe
                       </div> 
                        
                    </td>
                    <td >
                        <span className={`${styles.status} ${styles.cancelled}`}> done </span>
                        </td>
                    <td>12.95.2024</td>
                    <td>$67436</td>
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default Transactions