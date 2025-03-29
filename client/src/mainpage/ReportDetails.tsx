import ReportInterface from "./ReportInterface";
export default function ReportDetails({ report }: { report: ReportInterface }){
    return (
        <div className="report-card">
            <img src="src/assets/smieci-1.png" alt="Logo" height="100px" width="100px" />
            <div>
                <h1>{report.title}</h1>
                <h2>{report.date}</h2>
                <h2>{report.location}</h2>
                <h2>{report.body}</h2>
            </div>
        </div>
    );

}