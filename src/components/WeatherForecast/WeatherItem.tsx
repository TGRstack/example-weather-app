/* WeatherItem
  - a stacked item
  - day of the week
*/

import * as Stc from 'modules/ui/tgr/common.scss'
import * as React from 'react'
// import { ItemTemperature } from '.'
import { IWeatherItem, TempMinMax } from '..'
import * as S from './WeatherItem.scss'

interface IProps {
  data: IWeatherItem,
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const Day = ({date}: {date: number}) => <span>{days[new Date(date).getDay()]}</span>

export default function WeatherItem({data}: IProps): JSX.Element  {
  if (!data || !data.temp) {
    console.error(data)
    return null
  }

  return  <div className={[S.container, Stc.spaceBetween].join(' ')}>
    <Day date={data.time} />
    <TempMinMax min={data.temp.low} max={data.temp.high} />
  </div>
}

// const Day = ({date}) => <span>{new Date(date).toUTCString().substr(0, 12)}</span>
