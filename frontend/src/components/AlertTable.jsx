import React from "react"
import { updateAlert, deleteAlert } from "../api/alertApi"
import styles from "./AlertTable.module.css"

const AlertTable = ({ alerts, refreshAlerts }) => {

  const handleStatusUpdate = async (id, status) => {
    await updateAlert(id, { status })
    refreshAlerts()
  }

  const handleDelete = async (id) => {
    await deleteAlert(id)
    refreshAlerts()
  }

  return (
    <div>
      <h3 className={styles.heading}>Visa Slot Alerts</h3>

      {alerts.length === 0 ? (
        <p className={styles.empty}>No alerts found</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>Visa Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.country}</td>
                <td>{alert.city}</td>
                <td>{alert.visaType}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[alert.status.toLowerCase()]
                    }`}
                  >
                    {alert.status}
                  </span>
                </td>
                <td>
                  <button
                    className={styles.action}
                    onClick={() => handleStatusUpdate(alert.id, "Booked")}
                    disabled={alert.status === "Booked"}
                  >
                    Mark booked
                  </button>

                  <span className={styles.separator}>·</span>

                  <button
                    className={styles.action}
                    onClick={() => handleStatusUpdate(alert.id, "Expired")}
                    disabled={alert.status === "Expired"}
                  >
                    Expire
                  </button>

                  <span className={styles.separator}>·</span>

                  <button
                    className={`${styles.action} ${styles.danger}`}
                    onClick={() => handleDelete(alert.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AlertTable
