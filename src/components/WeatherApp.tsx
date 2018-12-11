import gql from 'graphql-tag'
import Loader from 'modules/ui/tgr/Loader'
import * as React from 'react'
import { Query } from 'react-apollo'
import {
  openWeatherParser,
  WeatherCurrent,
  WeatherForecast,
} from '.'
import * as S from './WeatherApp.scss'
// import {currentCity, forecastCity5} from '../routes/Home/sampleData'

interface IProps {
  zipcode: number,
}

// NOTE: Network Calls
const query_currentWeather = gql`
query currentWeather($input: Input) {
  currentWeatherResponse(input: $input) @rest(
    type: "Get",
    path: "weather?{args.input}",
    method: "GET",
  ) {
    dt,
    main,
    name,
    sys,
    weather,
  }
}
`
const query_forecastWeather = gql`
query forecastWeather($input: Input) {
  forecastWeatherResponse(input: $input) @rest(
    type: "Get",
    path: "forecast?{args.input}",
    method: "GET",
  ) {
    city,
    cod,
    list,
  }
}
`

const apiKey = process.env.OPENWEATHER_AT
export default function WeatherApp(props: IProps): JSX.Element {
  const input = {
    appid: apiKey,
    units: 'metric',
    zip: `${props.zipcode},us`,
  }

  return <Query query={query_currentWeather} pollInterval={300000} variables={{input}}>
      {({ loading: l1, error: e1, data: {currentWeatherResponse} }) => {
        return <Query query={query_forecastWeather} pollInterval={300000} variables={{input}}>
        {({ loading: l2, error: e2, data: {forecastWeatherResponse} }) => {
          if (e1 || e2) {
            console.error(e1 || e2)
            return null
          }
          if (l1 || l2) {
            return <Loader />
          }

          const oData = openWeatherParser({
            currentCity:  currentWeatherResponse,
            forecastCity: forecastWeatherResponse,
          })

          return <div className={S.mobileContainer}><div className={S.appContainer}>
            <WeatherCurrent data={oData.current} meta={oData} />
            <WeatherForecast data={oData.forecast} />
          </div></div>
        }}
      </Query>
      }}
  </Query>
}

// NOTE: Sample Data
// export default function WeatherApp(props: IProps): JSX.Element {
//   const oData = openWeatherParser({
//     currentCity:  currentCity,
//     forecastCity: forecastCity5,
//   })

//   return <div className={S.mobileContainer}><div className={S.appContainer}>
//     <WeatherCurrent data={oData.current} meta={oData} />
//     <WeatherForecast data={oData.forecast} />
//   </div></div>
// }
