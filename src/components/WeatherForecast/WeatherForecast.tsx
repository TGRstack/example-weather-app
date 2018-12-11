import * as React from 'react'
import { WeatherItem } from '.'
import { IWeatherItem } from '..'

import * as S from './WeatherForecast.scss'

interface IProps {
  data: IWeatherItem[]
}

export default function WeatherForecast({data}: IProps): JSX.Element {
  return  <div className={S.container}>
    {data.map((item, key) => <WeatherItem data={item} key={key} />)}
  </div>
}
