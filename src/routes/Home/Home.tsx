import Gx from '@tgrx/gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import WeatherApp, {
  IWeatherItem,
} from 'components/'
import * as S from './Home.css'

const weatherItem = ({temp}: {temp: number[]}): IWeatherItem => {
  return {
    temp: {
      current: temp[0],
      high: temp[2],
      low: temp[1],
    }
  }
}
const weatherData: IWeatherItem[] = [
  weatherItem({temp: [10, 7, 13]}),
  weatherItem({temp: [15, 9, 22]}),
]

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <WeatherApp data={weatherData} />
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
