import ReportInterface from "./ReportInterface";

import './Report.css'; // Import the CSS file

export default function Report({ report }: { report: ReportInterface }) {
  return (
    <div className="report-card">
      {/*<img src="src/assets/smieci-1.png" alt="Logo" height="100px" width="100px" />*/}
      <div className="text-container">
        <h1>{report.title}</h1>
        <h2>{report.date}</h2>
        <h2>{report.location}</h2>
      </div>
    </div>
  );
}