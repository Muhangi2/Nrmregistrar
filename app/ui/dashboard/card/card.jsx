import React from 'react'
import styles from "./chard.module.css"


const Card = ({ icon: Icon, title, number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}><Icon size={30}/></div>
        
        <div>
        <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number}</span>
        
        </div>
        </div>
        
    </div>
  )
}

export default Card