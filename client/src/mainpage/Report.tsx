import { useEffect } from "react";
import ReportInterface from "./ReportInterface";


export default function Report({ report }: { report: ReportInterface }) {
async function addLike() {

  try {
    const response = await fetch(`http://localhost:5000/api/report/${report.id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Error:', error.message);
      alert(`Error: ${error.message}`);
      return;
    }
    const updatedReport = await response.json();
    console.log('Updated Report:', updatedReport);
  } catch (error) {
    console.error('Request failed', error);
    alert('Request failed. Please try again later.');
  }
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
              <h3>{report.likes}</h3>
              <button className="btn btn-success fs-3" onClick={()=> addLike()}>Bump</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

