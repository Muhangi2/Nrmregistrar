"use client"
import React from 'react';
import styles from "./login.module.css";
import Image from 'next/image';
import { authenticate } from '../lib/action';
import { useFormState } from "react-dom";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(authenticate, {});

  React.useEffect(() => {
    if (state.success) {
      router.push('/dashboard');
    }
  }, [state, router]);

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.yellowcircle}>
          <div className={styles.blackcircle}></div>
        </div>
      </div>
      <div className={styles.rightside}>
        <form action={formAction} className={styles.form}>
          <Image src="/logo.png" height="120" width="130" alt='' />
          <input type='text' name='username' placeholder='Username' />
          <input type='password' name='password' placeholder='Password' />
          <button type="submit">Login</button>
          {state.error && <p className={styles.error}>{state.error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Page;