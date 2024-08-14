import React from 'react'
import styles from './sidebar.module.css'
import {MdDashboard,MdLogout,} from 'react-icons/md'
import { IoPersonAdd } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const Sidebar = () => {
  const menuItems=[
    {
    title:"Pages",
    list:[
      {
        title:"Dashoard",
        path:"/dashboard",
        icon:<MdDashboard/>,
      },{
        title:"Addmember",
        path:"/dashboard/users/add",
        icon:<IoPersonAdd/>,
      },
      {
        title:"Members",
        path:"/dashboard/users",
        icon:<IoIosPeople />,
      },
      {
        title:"Colleges",
        path:"/dashboard/transactions",
        icon:<FaBuildingColumns/>,
      },
      {
        title:"Logout",
        path:"/dashboard/logout",
        icon:<IoIosLogOut/>,
      }
      
    ]
    },
    
  ]

  return (
    <div className={styles.container}>
      {/* user */}
      <div className={styles.user}>
        <Image src="/logo.png" height="110" width="130" className={styles.Userimage} alt=''/>
      </div>
      {/* list */}
      <ul className={styles.listtypes}>
        {menuItems.map((cat)=>(
          <li key={cat.title}> 
          <span key={styles.cat} className={styles.cat}>{cat.title}</span>
            {cat.list.map((item)=>(
           <MenuLink item={item} key={item.title}/>
          ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}> 
      <MdLogout/>
      Logout</button>
    </div>
  )
}

export default Sidebar