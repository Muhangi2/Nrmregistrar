"use client";
import React from 'react'
import styles from "./search.module.css"
import { MdSearch } from 'react-icons/md'
import { usePathname, useSearchParams,useRouter } from 'next/navigation'

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
         <MdSearch/>
        <input type='text' placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search