"use client"
import React from 'react'
import styles from "./Pagination.module.css"
import { usePathname, useSearchParams,useRouter } from 'next/navigation'
const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page=searchParams.get("page")||1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE=10;

  const hasPrev=ITEM_PER_PAGE*(parseInt(page)-1>0)
  const hasNext=ITEM_PER_PAGE*(parseInt(page)-1)+ITEM_PER_PAGE<count;
  //handlechange
  const handleChangePage=(type)=>{
    type ==="prev" ? params.set("page",parseInt(page)-1):params.set("page",parseInt(page)+1);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChangePage("prev")}>Previous</button>
        <button className={styles.button} disabled={!hasNext} onClick={()=>handleChangePage("next")}>Next</button>
    </div>
  )
}
export default Pagination