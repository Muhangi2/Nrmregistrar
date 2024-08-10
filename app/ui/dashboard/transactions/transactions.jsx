import React from 'react'
import styles from  "./transactions.module.css"
import Image from 'next/image'
const Transactions = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Colleges</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>CollegeName</td>
                    <td>Female</td>
                    <td>Male</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       <div className={styles.user}>
                       <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                         CEDAT
                        </div>
                    </td>
                    <td>345</td>
                    <td>567</td>
                    <td >
                        <span className={`${styles.status} ${styles.pending}`}>678</span>
                        </td>
                    
                </tr> 
                <tr>
                    <td>
                       <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/> 
                        COCIS
                        </div>
                    </td>
                    <td>456</td>
                    <td>456</td>
                    <td>
                        <span className={`${styles.status} ${styles.pending}`}>678</span>
                        </td>
                    
                </tr>
                <tr>
                    <td >
                       <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                        CHUSS
                       </div> 
                        
                    </td>
                    <td>345</td>
                    <td>677</td>
                    <td >
                        <span className={`${styles.status} ${styles.cancelled}`}> 567 </span>
                        </td>
                   
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default Transactions