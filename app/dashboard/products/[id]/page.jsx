import React from 'react'
import styles from "./singleproduct.module.css"
import Image from 'next/image'

const SingleProduct = () => {
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
       <label>Title</label>
       <input type='text'  name='title' placeholder='John Doe'/>
       <label>Price</label>
       <input  type='number' name='price' placeholder='3464576'/>
       <label>Stock</label>
       <input type='text' name="stock" placeholder='23'/>
       <label>Color</label>
       <input type='text' name="color" placeholder='red'/>
       <label>Cat</label>
       <select name='cat' id='cat'>
        <option value="kitchen">Kitchen</option>
        <option value="Computers">Computers</option>
       </select>
       <label>Description</label>
       <textarea type="text" name='description' placeholder='description'> 
       </textarea>
       <button type="submit">Update</button>
       </form>
        </div>
    </div>
  )
}

export default SingleProduct