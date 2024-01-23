import useAppSelector from "../hooks/useAppSelector";

export const Temp = (t: number ) => {
  const degree = useAppSelector((state) => state.weatherReducer.degree);

  return degree === "C"
    ? Math.floor((t - 273.14) * 1.8 + 32) + "°F"
    : Math.floor(t - 273.14) + "°C";
};
