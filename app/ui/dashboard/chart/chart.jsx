"use client";
import React from 'react';
import styles from "./chart.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const allColleges = [
  'CEES', 'COCIS', 'CEDAT', 'CHS', 'CHUSS', 'CONAS', 'CAES', 'COBAMS', 'COVAB', 'SCHOOL OF LAW', 'JINJA CAMPUS'
];

const Chart = ({ data }) => {
  // Prepare data for the chart
  const chartData = allColleges.map(college => {
    const collegeData = data?.find(item => item?.college === college) || {};
    return {
      name: college,
      male: collegeData?.males || 0,
      female: collegeData?.females || 0
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>Members per College and based on Gender</div>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0}  // Show all labels
            angle={-45}  // Rotate labels by -45 degrees
            textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" fill="#82ca9d" name="Male" />
          <Bar dataKey="female" fill="#8884d8" name="Female" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;