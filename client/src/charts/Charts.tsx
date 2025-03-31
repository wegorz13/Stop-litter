import { useState } from "react";
import { LineGraph } from "./ChartIncidentsPerMonths";
import { BarChart } from "./BarIncidentsPerCity";
import "./charts.css";
// enum ChartType {
//     Bar_incidents_per_district,
//     Chart_incidents_per_month,
// }
export default function Charts() {
  // const [chartType,setCharType] = useState<ChartType>(ChartType.Bar_incidents_per_district)
  // const [data] = useState<number[]>
  return (
    <div className="pomoc">
      <div className="border border-3  p-2 my-5">
        <LineGraph />
      </div>
      <div className="border border-3 p-2 ">
        <BarChart />
      </div>
    </div>
  );
}
