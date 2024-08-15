import React from 'react';
import styles from "./login.module.css";
import Image from 'next/image';
import { authenticate } from '../lib/action';
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.yellowcircle}>
          <div className={styles.blackcircle}></div>
        </div>
      </div>
      <div className={styles.rightside}>
        <form action={authenticate} className={styles.form}>
        <Image src="/logo.png" height="120" width="130" alt='' />
          <input type='text' name='username' placeholder='username' />
          <input type='text' name='password' placeholder='password' />
          <button type="submit"><h3>Login</h3></button>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {/* <h3>Dont have an account ?<span className={styles.link}>Sign up</span></h3> */}
        </form>
      </div>
    </div>
  );
};

export default Page;
