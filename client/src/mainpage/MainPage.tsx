import AddReport from "./AddReport"
import Map from "../map/Map"
import ReportDetails from "./ReportDetails"
import ReportInterface from "./ReportInterface"
import ReportsList from "./ReportsList"
import {useEffect, useState} from "react";



function MainPage(){

  const [reports,setReports]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/report")
        .then(res=>res.json())
        .then(data=>setReports(data))
  },[])

  const krakowReports: ReportInterface[] = reports;

  console.log("reportsy: ",krakowReports);

  return(

      <div>
          <div> Nazwa apki </div>
        <div>
          <Map/>
          <div>
            <AddReport/>
          </div>
        </div>
        <ReportsList reports={krakowReports}/>
      </div>
  )
}
export default MainPage
