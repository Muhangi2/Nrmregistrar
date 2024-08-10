import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
import Piechart from "../ui/dashboard/piechart/piechart"
//importing icons
import { FaUsers,FaMale, FaFemale , FaUniversity } from 'react-icons/fa';



const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
        <Card icon={FaUsers} title="Members" number="10,345"/>
        <Card icon={FaMale} title="Male" number="345"/>
        <Card icon={FaFemale} title="Female" number="2234"/>
        <Card icon={ FaUniversity} title="Colleges" number="14"/>
      </div>
      <div className={styles.statistics}>
             <div className={styles.graph}><Chart/></div>
             <div className={styles.chart}><Piechart/></div>
      </div>
      <Transactions/>
      
      </div>
      
    </div>
  )
}

export default page