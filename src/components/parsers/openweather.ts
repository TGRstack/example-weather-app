import { IWeatherData, IWeatherItem } from '../'
import Conditions from './openweather.conditionCodes'
import {
  IList5,
  IOpenWeatherCurrent,
  // IOpenWeatherForecast, 5-day
  IOpenWeatherForecast5,
} from './openweather.types'

interface IProps {
  currentCity: IOpenWeatherCurrent,
  forecastCity: IOpenWeatherForecast5,
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
const getCurrentData = (d: IOpenWeatherCurrent| IList5): IWeatherItem => ({
  condition: {
    code: d.weather[0].id,
    description: d.weather[0].description.toLowerCase(),
    image: Conditions.get(d.weather[0].id).img,
    name: d.weather[0].main.toLowerCase(),
  },
  date: isoDate(unixToJsTime(d.dt)),
  temp: {
    current: numberSingleSig(d.main.temp),
    high: numberSingleSig(d.main.temp_max),
    low: numberSingleSig(d.main.temp_min),
  },
  time: unixToJsTime(d.dt),
})

const averageOfArray = (arr: number[]): number => {
  let avg = -1000
  if (arr.length) {
      const sum = arr.reduce((p, n) => p + n, 0)
      avg = sum / arr.length
  }
  return avg
}
const aggregateDay = (d: IList5[]) => {
  const midDay = d[4]

  const main = (() => {
    const avg_temp: number[] = []
    const avg_temp_min: number[] = []
    const avg_temp_max: number[] = []

    d.forEach(e => {
      avg_temp.push(e.main.temp)
      avg_temp_min.push(e.main.temp_min)
      avg_temp_max.push(e.main.temp_max)
    })

    return {
      day: midDay.dt,
      temp: averageOfArray(avg_temp),
      temp_max: averageOfArray(avg_temp_max),
      temp_min: averageOfArray(avg_temp_min),
    }
  })()

  const day = {
    ...midDay,
    main,
  }

  return day
}
const getForecastData = (d: IOpenWeatherForecast5): IWeatherItem[] => {
  const todayISO = isoDate(unixToJsTime(d.list[0].dt))
  const afterToday = d.list.filter(i => {
    const currISO = isoDate(unixToJsTime(i.dt))
    return currISO !== todayISO
  })
  const next5Days: IList5[] = (() => {
    const days = []
    const day: IList5[] = []
    let currDay = todayISO

    for (const elm of afterToday) {
      const dt_txt = isoDate(unixToJsTime(elm.dt))
      // console.log(elm, {currDay, dt_txt, t: currDay === dt_txt})
      // add part to day
      if (currDay === dt_txt) {
        // start a new day of parts
        day.push(elm)
      } else {
        if (day.length > 0)  days.push(aggregateDay(day))
        currDay = dt_txt
        day = [elm]
      }
    }

    return days
  })()

  return next5Days.map((i: IList5) => ({
    condition: {
      code: i.weather[0].id,
      description: i.weather[0].description.toLowerCase(),
      image: Conditions.get(i.weather[0].id).img,
      name: i.weather[0].main.toLowerCase(),
    },
    date: isoDate(unixToJsTime(i.dt)),
    temp: {
      current: numberSingleSig(i.main.temp / 10),
      high: numberSingleSig(i.main.temp_max / 10), // equiv. to day time estimate
      low: numberSingleSig(i.main.temp_min / 10),  // equiv. to night time estimate
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
