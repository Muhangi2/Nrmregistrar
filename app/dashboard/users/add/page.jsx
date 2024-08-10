import React from 'react'
import styles from "./adduser.module.css"
import { addUsers } from '@/app/lib/action'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUsers} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstname">First Name</label>
          <input type='text' id="firstname" name='firstname' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="secondname">Second Name</label>
          <input type='text' id="secondname" name='secondname' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type='email' id="email" name='email' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="contact">Contact</label>
          <input type='text' id="contact" name='contact' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="district">District</label>
          <input type='text' id="district" name='district' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="hometown">Village/Town</label>
          <input type='text' id="hometown" name='hometown' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="studentNumber">Student Number</label>
          <input type='text' id="studentNumber" name='studentNumber' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="registrationnumber">Registration Number</label>
          <input type='text' id="registrationnumber" name='registrationnumber' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="residencehall">Hall of Attachment</label>
          <input type='text' id="residencehall" name='residencehall' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="position">Position</label>
          <input type='text' id="position" name='position' />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="college">College</label>
          <select name='college' id='college'>
            <option value="">Select College</option>
            <option value="COCIS">COCIS</option>
            <option value="CEDAT">CEDAT</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="school">School</label>
          <select name='school' id='school'>
            <option value="">Select School</option>
            <option value="Law">School of Law</option>
            <option value="Computing">School of Computing</option>
          </select>
        </div>
        <div className={styles.buttonContainer}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddUserPage