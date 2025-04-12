import { useState } from "react";
import ReportInterface from "./ReportInterface";
import './report.css';

export default function Report({ report }: { report: ReportInterface }) {
  const [likes, setLikes] = useState(report.likes);

  async function addLike() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/report/${report.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const error = await response.json();
        console.error("Error:", error.message);
        alert(`Error: ${error.message}`);
        return;
      }
      const updatedReport = await response.json();
      console.log("Updated Report:", updatedReport);

      setLikes(updatedReport.likes);
    } catch (error) {
      console.error("Request failed", error);
      alert("Request failed. Please try again later.");
    }
  }

  return (
    <div className="card my-4 shadow">
      <div className="row g-0">
        <div className="col-5">
          <img
            src={
              report.image && report.image !== "null"
                ? `data:image/jpeg;base64,${report.image}`
                : "/assets/smieci-1.png"
            }
            alt="Trash Report"
            className="img-fluid rounded-start report-img"
          />
        </div>

        <div className="col-7">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div className="text-center mb-3">
              <h5 className="fs-1 mb-4">{report.title}</h5>
              <p className="fs-2">{report.description}</p>
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <div>
                <h6 className="fs-5">{report.location}</h6>
                <h6 className="text-muted fs-5">{report.date}</h6>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="fs-1 text-center mb-2 text-dark">
                  {likes}
                </div>
                <button className="btn btn-success fs-3" onClick={addLike}>
                  Bump
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
