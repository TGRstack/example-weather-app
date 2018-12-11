export interface IWeatherData {
  city: ICityMeta,
  cityId: number,
  current: IWeatherItem,
  forecast: IWeatherItem[],
  // forecastHourly: IWeatherItem[],
  requestAt: number,
  requestSuccess: boolean,
  requestId: number,
}
export interface ICityMeta {
  country: string,
  name: string,
  sunrise: number,
  sunset: number,
}
export interface IWeatherItem {
  condition: IWeatherCondition,
  temp: IWeatherTemperature,
  time: number,
  date: string,
}
export interface IWeatherTemperature  {
  current: number,
  high: number,
  low: number,
}
export interface IWeatherCondition {
  code: number,
  description: string,
  image: string | undefined,
  name: string,
}
