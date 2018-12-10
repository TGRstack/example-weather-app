import * as React from 'react'
import { IWeatherItemTemperature } from '../../types'
import * as S from './ItemTemperature.scss'

interface IProps {
  data: IWeatherItemTemperature
}

export default function ItemTemperature({data}: IProps): JSX.Element {
  return  <div className={S.container}>
    <span className={S.primary}>{data.current}' C</span>
    <span className={S.secondary}>{data.high}' C</span>
    <span className={S.secondary}>{data.low}' C</span>
  </div>
}
