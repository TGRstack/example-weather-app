import * as React from 'react'
import { IWeatherItem, WeatherForecast } from '.'

interface IProps {
  data: IWeatherItem[]
}

export default function WeatherApp({data}: IProps): JSX.Element {
  return  <div>
    <WeatherForecast data={data} />
  </div>
}
