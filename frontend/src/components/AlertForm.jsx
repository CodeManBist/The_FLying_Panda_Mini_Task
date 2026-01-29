import React, { useState } from "react"
import { createAlert } from "../api/alertApi"
import styles from "./AlertForm.module.css"

const AlertForm = ({ onCreated }) => {
  const [form, setForm] = useState({
    country: "",
    city: "",
    visaType: "Tourist"
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createAlert(form)
    onCreated()
    setForm({ country: "", city: "", visaType: "Tourist" })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Country"
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
        required
      />

      <input
        className={styles.input}
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        required
      />

      <select
        className={styles.select}
        value={form.visaType}
        onChange={(e) => setForm({ ...form, visaType: e.target.value })}
      >
        <option value="Tourist">Tourist</option>
        <option value="Business">Business</option>
        <option value="Student">Student</option>
      </select>

      <button className={styles.button} type="submit">
        Create Alert
      </button>
    </form>
  )
}

export default AlertForm
