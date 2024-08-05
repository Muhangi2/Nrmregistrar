import React from 'react'
import styles from './sidebar.module.css'
import {MdDashboard,MdSupervisedUserCircle,MdShoppingBag,MdAttachMoney,MdWork,MdAnalytics,MdPeople,MdOutlineSettings,MdHelpCenter,MdLogout, MdSettings} from 'react-icons/md'

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
        title:"Addmembers",
        path:"/dashboard/users/add",
        icon:<MdSupervisedUserCircle/>,
      },
      {
        title:"Members",
        path:"/dashboard/users",
        icon:<MdShoppingBag/>,
      },
      {
        title:"colleges",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>,
      },
      {
        title:"Settings",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>,
      }
      
    ]
    },
    // {
    //   title:"Analytics",
    //   list:[
    //     {
    //       title:"Revenue",
    //       path:"/dashboard/revenue",
    //       icon:<MdWork/>,
    //     },{
    //       title:"Reports",
    //       path:"/dashboard/reports",
    //       icon:<MdAnalytics/>,
    //     },
    //     {
    //       title:"Teams",
    //       path:"/dashboard/teams",
    //       icon:<MdPeople/>,
    //     },
    //   ]
    //   },
    //   {
    //     title:"User",
    //     list:[
    //       {
    //         title:"settings",
    //         path:"/dashboard/settings",
    //         icon:<MdSettings/>,
    //       },{
    //         title:"Help",
    //         path:"/dashboard/help",
    //         icon:<MdHelpCenter/>,
    //       },
    //     ]
    //  }
  ]

  return (
    <div className={styles.container}>
      {/* user */}
      <div className={styles.user}>
        <Image src="/logo.png" height="110" width="130" className={styles.Userimage}/>
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