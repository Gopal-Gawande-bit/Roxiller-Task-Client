// src/components/TransactionChart.jsx
import React from "react"
import { Bar } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import styles from "../styles/TransactionChart.module.css"

// Register all required components
Chart.register(...registerables)

const TransactionChart = ({ chartData }) => {
  const data = {
    labels: chartData.map((item) => item.priceRange),
    datasets: [
      {
        label: "Number of Items",
        data: chartData.map((item) => item.count),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className={styles.chartContainer}>
      <h3>Transaction Bar Chart</h3>
      <Bar data={data} />
    </div>
  )
}

export default TransactionChart
