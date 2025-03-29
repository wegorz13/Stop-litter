import { useState } from "react"
import { LineGraph } from "./ChartIncidentsPerMonths"
import { BarChart } from "./BarIncidentsPerCity"
// enum ChartType {
//     Bar_incidents_per_district,
//     Chart_incidents_per_month,
// }
export default function Charts(){
    // const [chartType,setCharType] = useState<ChartType>(ChartType.Bar_incidents_per_district)
    // const [data] = useState<number[]>
    return <div>
        <div>
            <LineGraph/>
            <BarChart/>
        </div>
    </div>
}