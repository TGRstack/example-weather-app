import * as React from 'react'

import { ItemTemperature } from '.'
import { IWeatherItem } from '..'
import * as S from './WeatherItem.scss'

interface IProps {
  data: IWeatherItem,
  key: number,
}

export default function WeatherItem(props: IProps): JSX.Element  {
  return  <div className={S.container}>
    <ItemTemperature data={props.data.temp} />
  </div>
}
