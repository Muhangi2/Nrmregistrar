import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from '../ui/dashboard/footer/Footer'
const layout = ({children}) => {
  return (
    <div className={styles.container}>
      {/* leftside */}
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        {/* rightside and center */}
        <div className={styles.content}>
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </div>

    </div>
  )
}

export default layout