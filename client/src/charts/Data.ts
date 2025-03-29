const districts:string[]= [
    "Stare Miasto",
    "Grzegórzki",
    "Prądnik Czerwony",
    "Prądnik Biały",
    "Krowodrza",
    "Bronowice",
    "Zwierzyniec",
    "Dębniki",
    "Łagiewniki-Borek Fałęcki",
    "Swoszowice",
    "Podgórze Duchackie",
    "Bieżanów-Prokocim",
    "Podgórze",
    "Czyżyny",
    "Mistrzejowice",
    "Bieńczyce",
    "Wzgórza Krzesławickie",
    "Nowa Huta"
]
console.log(districts)
export interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
    }[];
  }
  
  
  export const incidentsPerMonthData: ChartData = {
    labels: [
      "Styczeń",
      "Luty", // Dodano brakujące miesiące
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień"
    ],
    datasets: [
      {
        label: "Incydenty na miesiąc",
        data: [63, 13, 12, 42, 98, 123, 12, 24, 82, 102, 0, 0], // Dodano brakujące dane
        borderColor: "rgb(108, 0, 249)"
      }
    ]
  };
  export interface ChartData2 {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      borderWidth:number;
    }[];
  }
  
export const incidentsPerCityData: ChartData2 = {
    labels: [
        'Warszawa',   // woj. mazowieckie
        'Kraków',     // woj. małopolskie
        'Łódź',       // woj. łódzkie
        'Wrocław',    // woj. dolnośląskie
        'Poznań',     // woj. wielkopolskie
        'Gdańsk',     // woj. pomorskie
        'Szczecin',   // woj. zachodniopomorskie
        'Bydgoszcz',  // woj. kujawsko-pomorskie
        'Lublin',     // woj. lubelskie
        'Katowice',   // woj. śląskie
        'Białystok',  // woj. podlaskie
        'Kielce',     // woj. świętokrzyskie
        'Olsztyn',    // woj. warmińsko-mazurskie
        'Opole',      // woj. opolskie
        'Rzeszów',    // woj. podkarpackie
        'Gorzów Wielkopolski' // woj. lubuskie (siedziba wojewody)
],
    datasets: [
      {
        label: "Incydenty na dzielnice",
        data: [63, 13, 12, 42, 98, 123, 12, 24, 82, 102, 12, 32,43,53,13,43,42,12,4], // Dodano brakujące dane
        borderColor: "rgb(108, 0, 249)",
        borderWidth:1
      }
    ]
  };