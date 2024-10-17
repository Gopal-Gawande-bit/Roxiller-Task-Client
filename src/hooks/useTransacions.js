// src/hooks/useTransactions.js
import { useEffect, useState } from "react"
import {
  fetchTransactions,
  fetchTransactionStats,
  fetchTransactionChartData,
} from "../services/apiService"

export const useTransactions = (selectedMonth, search) => {
  const [transactions, setTransactions] = useState([])
  const [stats, setStats] = useState({
    totalSales: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  })
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await fetchTransactions(selectedMonth)
      const statsData = await fetchTransactionStats(selectedMonth)
      const chartDataResponse = await fetchTransactionChartData("May")

      console.log("td ", transactions)
      console.log("sd ", statsData)
      console.log("chart ", chartDataResponse)

      setTransactions(transactionsData)
      setStats(statsData)
      setChartData(chartDataResponse)
    }

    fetchData()
  }, [selectedMonth, search])

  return { transactions, stats, chartData }
}
