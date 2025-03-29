import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import trash from "./trash_backup.png";
import '../mainpage/ReportInterface'
import ReportInterface from "../mainpage/ReportInterface";

export default function Map(props: { reports: ReportInterface[] }) {
  const reports = props.reports;
  console.log("map reports", reports);

  return (
    <>
      <MapContainer center={[50.06139, 19.93722]} zoom={13}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {reports.map((report) => (
          <Marker
            position={[
              parseFloat(report.location.split(" ")[0]),
              parseFloat(report.location.split(" ")[1]),
            ]}
          >
            <Popup>
              <div className="popup_div">
                <h2>
                  {report.title} {report.date}
                </h2>
                <div className="popup_descr">
                  <img
                    src={
                      report.image && report.image !== "null"
                        ? `data:image/jpeg;base64,${report.image}`
                        : trash
                    }
                    alt={report.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "150px",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = trash;
                    }}
                  />
                  <p>{report.description !== null ? report.description : ""}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
