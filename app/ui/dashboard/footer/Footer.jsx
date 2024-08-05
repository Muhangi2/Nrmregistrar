import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Eliod Dev</div>
        <div className={styles.text}>@2024</div>
    </div>
  )
}

export default Footer