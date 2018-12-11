import * as React from 'react'
import Helmet from 'react-helmet'

import WeatherApp, { openWeatherParser } from 'components/'
import * as S from './Home.css'

import { currentCity, forecastCity16 } from './sampleData'

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <WeatherApp data={openWeatherParser({currentCity, forecastCity: forecastCity16})} />
    </div>
  )
}

export default HomeEntrancePage
