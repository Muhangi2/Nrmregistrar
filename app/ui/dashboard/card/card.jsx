import React from 'react'
import styles from "./chard.module.css"
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle size={30}/>
        <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.345</span>
        
        </div>
    </div>
  )
}

export default Card