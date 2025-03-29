import ReportInterface from "./ReportInterface";

export default function ReportDetails({ report }: { report: ReportInterface }){
    return (
        <div>
            <img src="src/assets/smieci-1.png" alt="Logo" height="100px" width="100px" />
            <div>
                <h1>{report.title}</h1>
                <h2>{report.date}</h2>
                <h2>{report.address}</h2>
                <h2>{report.description}</h2>
            </div>
        </div>
    );

}