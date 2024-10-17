// src/services/apiService.js
import axios from "axios"

const API_URL = "http://localhost:5000/api/v1" // Update with your API URL

export const fetchTransactions = async (month, search) => {
  const response = await axios.get(`${API_URL}/products/tranaction`, {
    params: { month, search },
  })
  return response.data
}

export const fetchTransactionStats = async (month) => {
  const response = await axios.get(`${API_URL}/statistics/transaction`, {
    params: { month },
  })

  return response.data
}

export const fetchTransactionChartData = async (month) => {
  const response = await axios.get(
    `${API_URL}/price-range-statistics/January/transaction`
  )
  return response.data
}
