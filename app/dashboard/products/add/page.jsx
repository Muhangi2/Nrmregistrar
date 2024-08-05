import React from 'react'
import styles from "./addProduct.module.css"
const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type='text' placeholder='title' name='title' required/>
            <select name='cat' id='cat'>
                <option value="">Choose the Category</option>
                <option value="">Kitchen</option>
                <option value="">Phone</option>
                <option value="">Computers</option>
            </select>
            <input type='number' placeholder='price' name='price' />
            <input type='number' placeholder='stock' name='stock' />
            <input type='text' placeholder='color' name='color' />
            <input type='text' placeholder='size' name='size' />
            <textarea
            name='desc'
            id='desc'
            rows='16'
            placeholder='Description'
            >
            </textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage