import * as React from 'react'
import Helmet from 'react-helmet'

import WeatherApp from 'components/' // , { openWeatherParser }
import * as S from './Home.css'

// import { currentCity, forecastCity16 } from './sampleData'
// data={openWeatherParser({currentCity, forecastCity: forecastCity16})}

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <WeatherApp zipcode={94112} />
    </div>
  )
}

export default HomeEntrancePage
