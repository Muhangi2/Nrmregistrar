
import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import Chart from '../ui/dashboard/chart/chart'
import Piechart from "../ui/dashboard/piechart/piechart"
import { fetchDashboardData } from '../lib/data'
//importing icons
import { FaUsers,FaMale, FaFemale , FaUniversity } from 'react-icons/fa';

import Collegepage from './colleges/page'
import { fetchCollegeData } from '../lib/data'

const page = async() => {
    const data = await fetchDashboardData();
    const collegedata=await  fetchCollegeData();
      
    console.log(collegedata,"data")
    const pieChartData = [
      { name: 'Male', value: data?.totalMales },
      { name: 'Female', value: data?.totalFemales },
    ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
      <Card icon={FaUsers} title="Members" number={data?.totalMembers} />
          <Card icon={FaMale} title="Male" number={data?.totalMales} />
          <Card icon={FaFemale} title="Female" number={data?.totalFemales} />
          <Card icon={FaUniversity} title="Colleges" number={data?.totalColleges} />
      </div>
      <div className={styles.statistics}>
             <div className={styles.graph}><Chart data={collegedata}/></div>
             <div className={styles.chart}><Piechart data={pieChartData} /></div>
      </div>
      <Collegepage/>
      
      </div>
      
    </div>
  )
}

export default page