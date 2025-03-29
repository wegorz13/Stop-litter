import ReportInterface from "./ReportInterface";
import Report from "./Report";
export default function ReportsList({reports}:{reports:ReportInterface[]}){
    return (
        <>
      <div className="row align-items-start ">
        {reports.map((report, index) => {
          return (
            <div key={index} className="col-6">
              <Report report={report} />
            </div>
          );
        })}
      </div>

    </>
    )
}