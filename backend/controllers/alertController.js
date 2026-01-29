import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../utils/fileDb.js";

export const getAlerts = (req, res, next) => {
  try {
    let alerts = readData();
    const { country, status } = req.query;

    if (country) {
      alerts = alerts.filter(a => a.country === country);
    }

    if (status) {
      alerts = alerts.filter(a => a.status === status);
    }

    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

export const createAlert = (req, res, next) => {
  try {
    const alerts = readData();

    const newAlert = {
      id: uuidv4(),
      country: req.body.country,
      city: req.body.city,
      visaType: req.body.visaType,
      status: "Active",
      createdAt: new Date().toISOString()
    };

    alerts.push(newAlert);
    writeData(alerts);

    res.status(201).json(newAlert);
  } catch (error) {
    next(error);
  }
};

export const updateAlert = (req, res, next) => {
  try {
    const alerts = readData();
    const alertIndex = alerts.findIndex(a => a.id === req.params.id);

    if (alertIndex === -1) {
      return res.status(404).json({ message: "Alert not found" });
    }

    alerts[alertIndex] = {
      ...alerts[alertIndex],
      ...req.body
    };

    writeData(alerts);
    res.status(200).json(alerts[alertIndex]);
  } catch (error) {
    next(error);
  }
};

export const deleteAlert = (req, res, next) => {
  try {
    const alerts = readData();
    const filteredAlerts = alerts.filter(a => a.id !== req.params.id);

    if (alerts.length === filteredAlerts.length) {
      return res.status(404).json({ message: "Alert not found" });
    }

    writeData(filteredAlerts);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
