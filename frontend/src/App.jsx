import React, { useEffect, useState } from "react"
import { fetchAlerts } from "./api/alertApi"
import AlertForm from "./components/AlertForm"
import AlertTable from "./components/AlertTable"
import "./index.css";

function App() {
  const [alerts, setAlerts] = useState([])

  const loadAlerts = async () => {
    const res = await fetchAlerts()
    setAlerts(res.data)
  }

  useEffect(() => {
    loadAlerts()
  }, [])

  return (
    <div>
      <h2>Visa Slot Alerts</h2>
      <AlertForm onCreated={loadAlerts} />
      <AlertTable alerts={alerts} refreshAlerts={loadAlerts} />
    </div>
  )
}

export default App
