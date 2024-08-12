"use client"

import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
import Piechart from "../ui/dashboard/piechart/piechart"
import { fetchDashboardData } from '../lib/data'

//importing icons
import { FaUsers,FaMale, FaFemale , FaUniversity } from 'react-icons/fa';

const page = () => {
  const [dashboardData, setDashboardData] = useState({
    totalMembers: 0,
    totalMales: 0,
    totalFemales: 0,
    totalColleges: 0,
  });
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data);
    };
  
    getData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
      <Card icon={FaUsers} title="Members" number={dashboardData.totalMembers} />
          <Card icon={FaMale} title="Male" number={dashboardData.totalMales} />
          <Card icon={FaFemale} title="Female" number={dashboardData.totalFemales} />
          <Card icon={FaUniversity} title="Colleges" number={dashboardData.totalColleges} />
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