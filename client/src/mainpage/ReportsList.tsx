import ReportInterface from "./ReportInterface";
import Report from "./Report";
export default function ReportsList({reports}:{reports:ReportInterface[]}){
    return (
        <>
      <div >
        {reports.map((report, index) => {
          return (
            <div key={index}>
              <Report report={report} />
            </div>
          );
        })}
      </div>

    </>
    )
}