import ReportInterface from "./ReportInterface";


export default function Report({ report }: { report: ReportInterface }) {
  function addLike(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="px-4 py-4">
      <div className="row border">
        <div className="col-5 px-0">
          <img src="src/assets/smieci-1.png" alt="Logo" width="100%" />
        </div>
        <div className="col-7 text-center d-flex flex-column justify-content-between">
          <div>
            <h2 className="text-start text-secondary">{report.date}</h2>
            <h1 className="f">{report.title}</h1>
            <h2 className="fs-2 text-start fw-normal mt-3">{report.body}</h2>
          </div>
          <div className="mt-auto row">
            <div className="col mt-auto">
              <h2 className="fs-5">{report.location}</h2>
            </div>
            <div className="col">
              <h3>5</h3>
              <button className="btn btn-success fs-3" onClick={()=> addLike()}>Bump</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

