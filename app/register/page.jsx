import React from 'react';
import styles from "./register.module.css";
import Image from 'next/image';
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.yellowcircle}>
          <div className={styles.blackcircle}></div>
        </div>
      </div>
      <div className={styles.rightside}>
        <form action="" className={styles.form}>
        <Image src="/logo.png" height="120" width="130" alt=''  />
          <input type='text' name='name' placeholder='username' />
          <input type='email' name='email' placeholder='email' />
          <input type='text' name='password' placeholder='password' />
          <input type='confirmpassword' name='confirmpassword' placeholder='confirmpassword' />
          <button><h3>Register</h3></button>
          <h3>Already have an account ?<span className={styles.link}>  Login</span></h3>
        </form>
      </div>
    </div>
  );
};

export default Page;
