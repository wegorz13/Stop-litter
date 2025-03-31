import AddReport from "./AddReport";
import Map from "../map/Map";
import ReportDetails from "./ReportDetails";
import ReportInterface from "./ReportInterface";
import ReportsList from "./ReportsList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [reports, setReports] = useState<ReportInterface[]>([]);

  const navigate = useNavigate();

  const goToLink = () => {
    navigate("/charts");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  console.log("reportsy: ", reports);

  return (
    <div>
      <h1 className="title">TrashMap</h1>
      <div className="container-upper">
        <Map reports={reports} />
        <div>
          <button
            className="btn btn-info p-4 py-2 mt-4 fs-4"
            onClick={goToLink}
          >
            Charts
          </button>
          <AddReport />
        </div>
      </div>
      <ReportsList reports={reports} />
    </div>
  );
}

export default MainPage;
