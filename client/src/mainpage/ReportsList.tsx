import ReportInterface from "./ReportInterface";
import Report from "./Report";
import { useEffect, useState } from "react";

export default function ReportsList({ reports }: { reports: ReportInterface[] }) {
  const [category, setCategory] = useState<string>("date");
  const [sortedReports, setSortedReports] = useState<ReportInterface[]>([...reports]);

  function sortReports(category: string) {
    let sorted = [...reports];

    if (category === "date") {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    if (category === "bumps") {
      sorted.sort((a, b) => b.likes - a.likes);
    }

    setSortedReports(sorted);
  }

  const onCategoryChange = (category: string) => {
    setCategory(category);
    sortReports(category);
  };
  useEffect(()=>{
    sortReports('date')
  },[])

  return (
    <>
    <div className="text-center fs-2">
      <select className="text-center" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="date">Date</option>
        <option value="bumps">Bumps</option>
      </select>
    </div>
      <div className="row align-items-start">
        {sortedReports.map((report, index) => (
          <div key={index} className="col-6">
            <Report report={report} />
          </div>
        ))}
      </div>
    </>
  );
}
