import * as React from 'react'
import {
  IWeatherData,
  WeatherCurrent,
  WeatherForecast,
} from '.'
import * as S from './WeatherApp.scss'

interface IProps {
  data: IWeatherData
}
export default function WeatherApp({data}: IProps): JSX.Element {
  return  <div className={S.mobileContainer}><div className={S.appContainer}>
    <WeatherCurrent data={data.current} meta={data} />
    <WeatherForecast data={data.forecast} />
  </div></div>
}
