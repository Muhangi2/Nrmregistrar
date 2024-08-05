import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircle } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.bgContainer}>
            <Image src="/astronaut.png" layout="fill" className={styles.bg}/>
          </div>
          <div className={styles.texts}>
            <span className={styles.notifications}>Available now </span>
            <h3 className={styles.titles}>New Version of Admin dashboard</h3>
            <span className={styles.subtitle}>Takes less minutes</span>
            <p className={styles.description}>There are a couple of ways to see a list of branches</p>
            <button className={styles.button}>
                <MdPlayCircle size={20}/>
                Watch
            </button>
          </div>
        </div>
        <div className={styles.item}>
            <div className={styles.texts}>
              <span className={styles.notification}>Coming Soon</span>
              <h3 className={styles.titles}>ESLint provides several predefined</h3>
              <span className={styles.subtitle}>Takes less minutes</span>
              <p className={styles.description}>There are a couple of ways to see a list of </p>
              <button className={styles.button}>
                <MdPlayCircle size={20}/>
                play
            </button>
            </div>
        </div>
    </div>
  )
}

export default Rightbar