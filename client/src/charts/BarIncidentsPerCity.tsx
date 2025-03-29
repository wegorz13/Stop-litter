import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from "chart.js";
import { incidentsPerCityData } from "./Data";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export const BarChart = ()=>{
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Wykres kolumnowy najbardziej zaśmieconych miast"
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return     <div style={{ width: '600px', height: '400px' }}>
        <Bar options={options} data={incidentsPerCityData}/>
        </div>
}