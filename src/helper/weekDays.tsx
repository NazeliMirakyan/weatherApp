export const getWeekDays = (day: string) => {
  const weekDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekDay[new Date(day).getDay()];
};
