import * as React from 'react'
import { IWeatherItem, WeatherItem } from '.'

interface IProps {
  data: IWeatherItem[]
}

export default function WeatherForecast({data}: IProps): JSX.Element {
  return  <div>
    {data.map((item, key) => <WeatherItem data={item} key={key} />)}
  </div>
}
