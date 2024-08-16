"use client"
import React, { useState, useEffect } from 'react';
import styles from "./adduser.module.css";
import { addVoters } from '@/app/lib/action';

const collegeToSchoolsMap = {
  CEES: ["School of Education", "School of Distance and Lifelong Learning"],
  COCIS: ["School of Computing", "School of Information Science"],
  CEDAT: ["School of Engineering", "School of Built Environment"],
  CHS: ["School of Medicine", "School of Public Health"],
  CHUSS: ["School of Liberal and Performing Arts", "School of Languages, Literature and Communication"],
  CONAS: ["School of Physical Sciences", "School of Biological Sciences"],
  CAES: ["School of Agricultural Sciences", "School of Food Technology, Nutrition and Bioengineering"],
  COBAMS: ["School of Business", "School of Economics"],
  COVAB: ["School of Veterinary Medicine", "School of Biosciences"],
  SCHOOLOFLAW: ["School of Law"],
  JINJACAMPUS: ["Jinja School of Business", "Jinja School of Computing"],
 
};

const AddUserPage = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    if (selectedCollege && collegeToSchoolsMap[selectedCollege]) {
      setSchools(collegeToSchoolsMap[selectedCollege]);
    } else {
      setSchools([]);
    }
  }, [selectedCollege]);

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form action={addVoters} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstname">First Name</label>
          <input type='text' id="firstname" name='firstname' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="secondname">Second Name</label>
          <input type='text' id="secondname" name='secondname' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="gender">Gender</label>
          <select name='gender' id='gender' required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type='email' id="email" name='email' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="contact">Contact</label>
          <input type='text' id="contact" name='contact' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="district">District</label>
          <input type='text' id="district" name='district' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="hometown">Village/Town</label>
          <input type='text' id="hometown" name='hometown' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="studentNumber">Student Number</label>
          <input type='text' id="studentNumber" name='studentNumber' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="registrationnumber">Registration Number</label>
          <input type='text' id="registrationnumber" name='registrationnumber' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="residencehall">Hall of Attachment</label>
          <select type='text' id="residencehall" name='residencehall' required >
            <option value="">Select Hall</option>
            <option value="Lumumba">Lumumba</option>
            <option value="Livingstone">Livingstone</option>
            <option value="Mitchell">Mitchell</option>
            <option value="Nkurumah">Nkurumah</option>
            <option value="Nsibirwa">Nsibirwa</option>
            <option value="University Hall">University Hall</option>
            <option value="Africa">Africa</option>
            <option value="Complex">Complex</option>
            <option value="Mary Stuart">Mary Stuart</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="college">College</label>
          <select name='college' id='college' required onChange={handleCollegeChange}>
            <option value="">Select College</option>
            <option value="CEES">CEES</option>
            <option value="COCIS">COCIS</option>
            <option value="CEDAT">CEDAT</option>
            <option value="CHS">CHS</option>
            <option value="CHUSS">CHUSS</option>
            <option value="CONAS">CONAS</option>
            <option value="CAES">CAES</option>
            <option value="COBAMS">COBAMS</option>
            <option value="COVAB">COVAB</option>
            <option value="SCHOOL OF LAW">SCHOOLOFLAW</option>
            <option value="JINJA CAMPUS">JINJACAMPUS</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="school">School</label>
          <select name='school' id='school' required>
            <option value="">Select School</option>
            {schools.map((school, index) => (
              <option key={index} value={school}>{school}</option>
            ))}
          </select>
        </div>
        <div className={styles.buttonContainer}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddUserPage;
