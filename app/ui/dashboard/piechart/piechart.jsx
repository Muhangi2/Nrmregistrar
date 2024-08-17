"use client"
import React from 'react'
import styles from "./piechart.module.css"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#FFBB28']; // Blue and Yellow

const renderCustomLabel = ({ name, percent }) => {
  return `${name}: ${(percent * 100).toFixed(0)}%`;
};

const Piechart = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Pie Chart</div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}  // Adjusted outer radius
            // innerRadius={60}   // Optional: For a doughnut chart effect
            fill="#8884d8"
            dataKey="value"
            label={renderCustomLabel}  // Added custom label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Piechart
