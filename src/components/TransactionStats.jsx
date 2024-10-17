// src/components/TransactionStats.jsx
import React from "react"
import styles from "../styles/TransactionStats.module.css"

const TransactionStats = ({ stats }) => {
  return (
    <div className={styles.statsContainer}>
      <h3>Transaction Statistics</h3>
      <div className={styles.statItem}>Total Sales: ${stats.totalSales}</div>
      <div className={styles.statItem}>
        Total Sold Items: {stats.totalSoldItems}
      </div>
      <div className={styles.statItem}>
        Total Not Sold Items: {stats.totalNotSoldItems}
      </div>
    </div>
  )
}

export default TransactionStats
