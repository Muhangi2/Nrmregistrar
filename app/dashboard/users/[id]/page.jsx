import React from 'react'
import styles from "./singleuser.module.css"
import Image from 'next/image'

const SingeUser = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill />
                John Doe
            </div>
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
       <label>Username</label>
       <input type='text'  name='username' placeholder='John Doe'/>
       <label>Email</label>
       <input  type='email' name='email' placeholder='eliodamuriab@gmail'/>
       <label>Password</label>
       <input type='password' name="password" placeholder='eliod'/>
       <label>Password</label>
       <input type='phone' name="phone" placeholder='046456934'/>
       <label>address</label>
       <textarea type="text" name='address' placeholder='New York'> 
       </textarea>
       <label>Is Admin ?</label>
       <select name='isAdmin' id='isAdmin'>
        <option value={true}>Yes</option>
        <option value={true}>No</option>
       </select>
       <label>Is Active ?</label>
       <select name='isActive' id='idActive'>
         <option value={true}>Yes</option>
         <option value={false}>false</option>
       </select>
       <button>Update</button>
       </form>
        </div>
    </div>
  )
}

export default SingeUser