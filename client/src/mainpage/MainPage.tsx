import AddReport from "./AddReport";
import Map from "../map/Map";
import ReportDetails from "./ReportDetails";
import ReportInterface from "./ReportInterface";
import ReportsList from "./ReportsList";
const krakowReports: ReportInterface[] = [
  {
    title: "Uszkodzona nawierzchnia na ul. Dietla",
    description:
      "Duży ubytek w asfalcie, stwarzający zagrożenie dla rowerzystów i samochodów.",
    address: "ul. Dietla 36, Kraków",
    photo_url: "https://example.com/photos/dietla_damage.jpg",
    date: "2025-03-27",
  },
  {
    title: "Przewrócone drzewo w Parku Jordana",
    description:
      "Po wczorajszej burzy drzewo zablokowało ścieżkę dla pieszych w centralnej części parku.",
    address: "Park Jordana, al. 3 Maja, Kraków",
    photo_url: "https://example.com/photos/jordan_tree.jpg",
    date: "2025-03-25",
  },
  {
    title: "Nielegalne graffiti na Kazimierzu",
    description:
      "Ściana zabytkowej kamienicy została zniszczona przez wandali.",
    address: "ul. Józefa 12, Kraków",
    photo_url: "https://example.com/photos/kazimierz_graffiti.jpg",
    date: "2025-03-26",
  },
  {
    title: "Awaria sygnalizacji świetlnej",
    description:
      "Nie działa sygnalizacja na skrzyżowaniu, powodując utrudnienia w ruchu.",
    address: "Skrzyżowanie ul. Konopnickiej i Monte Cassino, Kraków",
    photo_url: "https://example.com/photos/traffic_lights.jpg",
    date: "2025-03-28",
  },
  {
    title: "Przepełnione kosze na śmieci na Plantach",
    description:
      "Kosze nie były opróżniane od kilku dni, śmieci wysypują się na chodnik.",
    address: "Planty Krakowskie, okolice Bramy Floriańskiej, Kraków",
    photo_url: "https://example.com/photos/planty_trash.jpg",
    date: "2025-03-29",
  },
  {
    title: "Zalana przejście podziemne przy Galerii Krakowskiej",
    description:
      "Po porannym deszczu przejście jest częściowo zalane, utrudniając przejście pieszym.",
    address: "Przejście podziemne przy Galerii Krakowskiej, Kraków",
    photo_url: "https://example.com/photos/flooded_passage.jpg",
    date: "2025-03-29",
  },
  {
    title: "Uszkodzona wiata przystankowa",
    description:
      "Rozbite szkło na przystanku tramwajowym, stwarzające zagrożenie dla oczekujących.",
    address: "Przystanek Teatr Bagatela, Kraków",
    photo_url: "https://example.com/photos/broken_shelter.jpg",
    date: "2025-03-24",
  },
  {
    title: "Dziki na osiedlu Ruczaj",
    description:
      "Stado dzików regularnie pojawia się wieczorami w okolicy bloków mieszkalnych.",
    address: "ul. Chmieleniec, Osiedle Ruczaj, Kraków",
    photo_url: "https://example.com/photos/ruczaj_boars.jpg",
    date: "2025-03-26",
  },
  {
    title: "Niedziałające oświetlenie na Bulwarach Wiślanych",
    description:
      "Brak oświetlenia na odcinku około 200 metrów, co stwarza zagrożenie dla bezpieczeństwa.",
    address: "Bulwary Wiślane, okolice Mostu Grunwaldzkiego, Kraków",
    photo_url: "https://example.com/photos/dark_bulwary.jpg",
    date: "2025-03-28",
  },
  {
    title: "Nieprawidłowo zaparkowane samochody na Starym Mieście",
    description:
      "Kilka samochodów zaparkowanych na chodniku, blokujących przejście dla pieszych.",
    address: "ul. Szewska 7, Kraków",
    photo_url: "https://example.com/photos/bad_parking.jpg",
    date: "2025-03-27",
  },
];
export default function MainPage() {
  return (
    <div className="container-fluid">
      <div>
        <Map />
        <AddReport />
      </div>
      <ReportsList reports={krakowReports} />
    </div>
  );
}
