import ReportInterface from "./ReportInterface";


export default function Report({ report }: { report: ReportInterface }) {
  return (
    <div className="px-4 py-4">
      <div className="row border">
        <div className="col-5 px-0">
          <img src="src/assets/smieci-1.png" alt="Logo" width="100%"/>
        </div>
        <div className="col-7 text-center mt-4">
          <h1>{report.title}</h1>
          <h2>{report.date}</h2>
          <h2>{report.address}</h2>
          <div>
            <div className="justify-content-end">
              <button className="btn btn-success fs-3">Bump</button>
              <h3 className="">Bumps:</h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}