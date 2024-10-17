// src/App.jsx
import React, { useState } from "react"
import TransactionTable from "./components/TransactionTable"
import TransactionStats from "./components/TransactionStats"
import TransactionChart from "./components/TransactionChart"
import { useTransactions } from "./hooks/useTransacions"
import "./App.css"

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(3) // March
  const [search, setSearch] = useState("")
  const { transactions, stats, chartData } = useTransactions(
    selectedMonth,
    search
  )

  return (
    <div className="App">
      <div className="controls">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>
      <TransactionStats stats={stats} />
      <TransactionTable
        selectedMonth={selectedMonth}
        search={search}
        setSearch={setSearch}
        transactions={transactions}
      />
      <TransactionChart chartData={chartData} />
    </div>
  )
}

export default App
