import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "alerts.json");

export const readData = () => {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const data = fs.readFileSync(filePath, "utf-8");

  if (!data.trim()) {
    return [];
  }

  return JSON.parse(data);
};

export const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
