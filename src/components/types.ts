export interface IWeatherItemTemperature  {
  current: number,
  high: number,
  low: number,
}
export interface IWeatherItem {
  temp: IWeatherItemTemperature
}
