// tickets.js
export const trips = [
  // Минулі подорожі
  { from: "Kyiv", to: "Warsawa", passengers: "1", date_departure: "01.01.2024", departure: "15:00", duration: "10.5", date_arrival: "02.01.2024", arrival: "01:30", baggage: "no" },
  { from: "Warsawa", to: "Kyiv", passengers: "2", date_departure: "10.01.2024", departure: "13:00", duration: "10.5", date_arrival: "10.01.2024", arrival: "23:30", baggage: "yes" },
  { from: "Kyiv", to: "Lviv", passengers: "3", date_departure: "01.02.2024", departure: "09:00", duration: "6", date_arrival: "01.02.2024", arrival: "15:00", baggage: "no" },
  { from: "Lviv", to: "Kyiv", passengers: "4", date_departure: "15.02.2024", departure: "10:00", duration: "6", date_arrival: "15.02.2024", arrival: "16:00", baggage: "yes" },
  { from: "Kyiv", to: "Odesa", passengers: "1", date_departure: "01.03.2024", departure: "12:00", duration: "5", date_arrival: "01.03.2024", arrival: "17:00", baggage: "no" },
  { from: "Odesa", to: "Kyiv", passengers: "2", date_departure: "20.03.2024", departure: "14:00", duration: "5", date_arrival: "20.03.2024", arrival: "19:00", baggage: "yes" },
  { from: "Kyiv", to: "Kharkiv", passengers: "3", date_departure: "01.04.2024", departure: "08:00", duration: "4.5", date_arrival: "01.04.2024", arrival: "12:30", baggage: "no" },
  { from: "Kharkiv", to: "Kyiv", passengers: "4", date_departure: "15.04.2024", departure: "10:00", duration: "4.5", date_arrival: "15.04.2024", arrival: "14:30", baggage: "yes" },
  { from: "Kyiv", to: "Dnipro", passengers: "1", date_departure: "01.05.2024", departure: "16:00", duration: "5", date_arrival: "01.05.2024", arrival: "21:00", baggage: "no" },
  { from: "Dnipro", to: "Kyiv", passengers: "2", date_departure: "10.05.2024", departure: "18:00", duration: "5", date_arrival: "10.05.2024", arrival: "23:00", baggage: "yes" },
  
  // Майбутні подорожі
  { from: "Kyiv", to: "Warsawa", passengers: "1", date_departure: "03.07.2024", departure: "15:00", duration: "10.5", date_arrival: "04.07.2024", arrival: "01:30", baggage: "no" },
  { from: "Warsawa", to: "Kyiv", passengers: "2", date_departure: "05.07.2024", departure: "13:00", duration: "10.5", date_arrival: "06.07.2024", arrival: "23:30", baggage: "yes" },
  { from: "Kyiv", to: "Lviv", passengers: "3", date_departure: "07.07.2024", departure: "09:00", duration: "6", date_arrival: "07.07.2024", arrival: "15:00", baggage: "no" },
  { from: "Lviv", to: "Kyiv", passengers: "4", date_departure: "08.07.2024", departure: "10:00", duration: "6", date_arrival: "08.07.2024", arrival: "16:00", baggage: "yes" },
  { from: "Kyiv", to: "Odesa", passengers: "1", date_departure: "09.07.2024", departure: "12:00", duration: "5", date_arrival: "09.07.2024", arrival: "17:00", baggage: "no" },
  { from: "Odesa", to: "Kyiv", passengers: "2", date_departure: "10.07.2024", departure: "14:00", duration: "5", date_arrival: "10.07.2024", arrival: "19:00", baggage: "yes" },
  { from: "Kyiv", to: "Kharkiv", passengers: "3", date_departure: "11.07.2024", departure: "08:00", duration: "4.5", date_arrival: "11.07.2024", arrival: "12:30", baggage: "no" },
  { from: "Kharkiv", to: "Kyiv", passengers: "4", date_departure: "12.07.2024", departure: "10:00", duration: "4.5", date_arrival: "12.07.2024", arrival: "14:30", baggage: "yes" },
  { from: "Kyiv", to: "Dnipro", passengers: "1", date_departure: "13.07.2024", departure: "16:00", duration: "5", date_arrival: "13.07.2024", arrival: "21:00", baggage: "no" },
  { from: "Dnipro", to: "Kyiv", passengers: "2", date_departure: "14.07.2024", departure: "18:00", duration: "5", date_arrival: "14.07.2024", arrival: "23:00", baggage: "yes" },
  
  // Додаткові подорожі
  { from: "Kyiv", to: "Warsawa", passengers: "1", date_departure: "03.07.2024", departure: "12:00", duration: "10.5", date_arrival: "04.07.2024", arrival: "22:30", baggage: "no" },
  { from: "Kyiv", to: "Warsawa", passengers: "1", date_departure: "03.07.2024", departure: "18:00", duration: "10.5", date_arrival: "04.07.2024", arrival: "04:30", baggage: "no" },
  { from: "Warsawa", to: "Kyiv", passengers: "2", date_departure: "05.07.2024", departure: "10:00", duration: "10.5", date_arrival: "06.07.2024", arrival: "20:30", baggage: "yes" },
  { from: "Warsawa", to: "Kyiv", passengers: "2", date_departure: "05.07.2024", departure: "16:00", duration: "10.5", date_arrival: "06.07.2024", arrival: "02:30", baggage: "yes" },
  { from: "Kyiv", to: "Lviv", passengers: "3", date_departure: "07.07.2024", departure: "11:00", duration: "6", date_arrival: "07.07.2024", arrival: "17:00", baggage: "no" },
  { from: "Lviv", to: "Kyiv", passengers: "4", date_departure: "08.07.2024", departure: "12:00", duration: "6", date_arrival: "08.07.2024", arrival: "18:00", baggage: "yes" },
  { from: "Kyiv", to: "Odesa", passengers: "1", date_departure: "09.07.2024", departure: "14:00", duration: "5", date_arrival: "09.07.2024", arrival: "19:00", baggage: "no" },
  { from: "Odesa", to: "Kyiv", passengers: "2", date_departure: "10.07.2024", departure: "16:00", duration: "5", date_arrival: "10.07.2024", arrival: "21:00", baggage: "yes" },
  { from: "Kyiv", to: "Kharkiv", passengers: "3", date_departure: "11.07.2024", departure: "06:00", duration: "4.5", date_arrival: "11.07.2024", arrival: "10:30", baggage: "no" },
  { from: "Kharkiv", to: "Kyiv", passengers: "4", date_departure: "12.07.2024", departure: "08:00", duration: "4.5", date_arrival: "12.07.2024", arrival: "12:30", baggage: "yes" },
];
