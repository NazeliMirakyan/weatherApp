const key = `ebb407ec03b029f3bfcafbd26eef16a7`;

export const weatherUrl = (city:string) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;