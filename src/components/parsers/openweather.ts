import { IWeatherData, IWeatherItem } from '../'
import Conditions from './openweather.conditionCodes'
import {
  IList,
  IList16,
  IOpenWeatherCurrent,
  // IOpenWeatherForecast, 5-day
  IOpenWeatherForecast16,
} from './openweather.types'

interface IProps {
  currentCity: IOpenWeatherCurrent,
  forecastCity: IOpenWeatherForecast16,
}

// HELPERS
const isoDate = (d: number) => new Date(d).toISOString().substr(0, 10)
const numberSingleSig = (n: number) => parseFloat(n.toFixed(1))
let currId = 0
const unixToJsTime = (s: number): number => s * 1000

// PARSERS
const getCityMeta = (d: IOpenWeatherCurrent) => ({
  country: d.sys.country,
  name: d.name,
  sunrise: d.sys.sunrise,
  sunset: d.sys.sunset,
})
const getCityId = (d: IOpenWeatherCurrent) => d.id
const getCurrentData = (d: IOpenWeatherCurrent| IList): IWeatherItem => ({
  condition: {
    code: d.weather[0].id,
    description: d.weather[0].description.toLowerCase(),
    image: Conditions.get(d.weather[0].id).img,
    name: d.weather[0].main.toLowerCase(),
  },
  date: isoDate(unixToJsTime(d.dt)),
  temp: {
    current: numberSingleSig(d.main.temp / 10),
    high: numberSingleSig(d.main.temp_max / 10),
    low: numberSingleSig(d.main.temp_min / 10),
  },
  time: unixToJsTime(d.dt),
})
const getForecastData = (d: IOpenWeatherForecast16): IWeatherItem[] => {
  const next5Days = d.list.slice(0, 5)

  return next5Days.map((i: IList16) => ({
    condition: {
      code: i.weather[0].id,
      description: i.weather[0].description.toLowerCase(),
      image: Conditions.get(i.weather[0].id).img,
      name: i.weather[0].main.toLowerCase(),
    },
    date: isoDate(unixToJsTime(i.dt)),
    temp: {
      current: numberSingleSig(i.temp.day / 10),
      high: numberSingleSig(i.temp.max / 10), // equiv. to day time estimate
      low: numberSingleSig(i.temp.min / 10),  // equiv. to night time estimate
    },
    time: unixToJsTime(i.dt),
  }))
}

// THE EXEC THING
export default function openWeatherParser({currentCity, forecastCity}: IProps): IWeatherData {
  const requestId = currId + 0

  // const forecastHourly = forecastCity.list.map(l => getCurrentData(l))  // 3 hour increments
  const city = getCityMeta(currentCity)
  const cityId = getCityId(currentCity)
  const current = getCurrentData(currentCity)
  const forecast = getForecastData(forecastCity)
  const requestAt = Date.now()
  const requestSuccess = true
  currId++ // set the next requestID

  return {
    city,
    cityId,
    current,
    forecast,
    // forecastHourly,
    requestAt,
    requestId,
    requestSuccess,
  }
}

// NOTE: for aggregating 5-days into daily, keep to create hourly from 3-hours
// const todayISO = isoDate(unixToJsTime(currentCity.dt))
// const getForecastData = ({
//   forecastHourly,
//   todayISO,
// }: {
//   forecastHourly: IWeatherItem[],
//   todayISO: string
// }): IWeatherItem[] => {
//   // forecast data comes from the API in sets of 3.
//   // first filter out the forecast data that is for the current data
//   // then combine all the chunks whether the date is the same
//   //   should be 4 chunks per day, but written to take any number of daily chunks
//   const afterToday = forecastHourly.filter(i => {
//     const currISO = isoDate(i.time)
//     console.log({currISO})
//     return currISO !== todayISO
//   })
//   console.log({afterToday, todayISO})

//   const days: IWeatherItem[] = []
//   let currDay: IWeatherItem = {}
//   afterToday.forEach(i => {
//     if(iterDay) {

//     } else {
//       days.push(currDay)
//       currDay = {}
//     }
//   })

//   return days
// }
