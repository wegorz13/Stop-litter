import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { marker } from "leaflet";
import axios from "axios";

interface Report {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
}

export default function Map() {
  const [markers, setMarkers] = useState([]);

  const mockReports: Report[] = [
    {
      title: "Pothole on Main Square East",
      location: "50.0612 19.9365",
      date: "2023-07-15T08:30:00Z",
      id: 0,
      description: "null",
      image: "null",
    },
    {
      title: "Graffiti on Florianska Street",
      location: "50.0620 19.9380",
      date: "2023-06-22T14:15:00Z",
      id: 0,
      description: "null",
      image: "null",
    },
    {
      title: "Broken Bench near Cloth Hall",
      location: "50.0605 19.9350",
      date: "2023-05-04T17:45:00Z",
      id: 0,
      description: "null",
      image: "null",
    },
    {
      title: "Malfunctioning Streetlight on Grodzka",
      location: "50.0630 19.9400",
      date: "2023-04-11T20:00:00Z",
      id: 0,
      description: "null",
      image: "null",
    },
    {
      title: "Overflowing Trash Bin at Planty Park",
      location: "50.0598 19.9345",
      date: "2023-03-01T09:20:00Z",
      id: 0,
      description: "null",
      image: "null",
    },
  ];

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("api/reports");
        const data = response.data;

        const formattedMarkers = data.map((report: Report) => {
          const [lat, lng] = report.location.split(" ").map(Number);
          return { geocode: [lat, lng] };
        });

        setMarkers(formattedMarkers);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);
  return (
    <>
      <MapContainer center={[50.06139, 19.93722]} zoom={13}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mockReports.map((report) => (
          <Marker
            position={[
              parseFloat(report.location.split(" ")[0]),
              parseFloat(report.location.split(" ")[1]),
            ]}
          >
            <Popup>
              <h2>
                {report.title}
                {report.date}
              </h2>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
