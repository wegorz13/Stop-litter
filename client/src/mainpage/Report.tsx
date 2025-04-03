import ReportInterface from "./ReportInterface";
import "./report.css";

export default function Report({ report }: { report: ReportInterface }) {
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
    } catch (error) {
      console.error("Request failed", error);
      alert("Request failed. Please try again later.");
    }
  }

  return (
    <div className="report-card">
      <div className="row g-0">
        <div className="col-5 report-image-container">
          <img
            src={
              report.image && report.image !== "null"
                ? `data:image/jpeg;base64,${report.image}`
                : "src/assets/smieci-1.png"
            }
            alt="Trash Report"
            className="report-image"
          />
        </div>

        <div className="col-7 d-flex flex-column justify-content-between report-content">
          <div>
            <h2 className="report-date">{report.date}</h2>
            <h1 className="report-title">{report.title}</h1>
            <p className="report-description">{report.description}</p>
          </div>

          <div className="d-flex justify-content-between align-items-center report-footer">
            <h2 className="report-location">{report.location}</h2>
            <div className="d-flex align-items-center">
              <h3 className="report-likes">{report.likes}</h3>
              <button
                className="btn btn-success report-button"
                onClick={() => addLike()}
              >
                Bump
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
