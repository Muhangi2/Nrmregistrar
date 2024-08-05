import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'


const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className={styles.statistics}>
             <div className={styles.graph}><Chart/></div>
             <div className={styles.chart}><Chart/></div>
      </div>
      <Transactions/>
      
      </div>
      
    </div>
  )
}

export default page