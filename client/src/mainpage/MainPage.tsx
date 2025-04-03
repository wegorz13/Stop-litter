import Map from "./Map";
import ReportInterface from "./ReportInterface";
import ReportsList from "./ReportsList";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function MainPage() {
  const [reports, setReports] = useState<ReportInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container-upper">
        <Map reports={reports} />
      </div>
      <ReportsList reports={reports} />
    </div>
  );
}

export default MainPage;
