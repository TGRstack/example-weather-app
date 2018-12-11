export interface IOpenWeatherCurrent {
  base:       string
  cod:        number
  coord:      ICoord
  id:         number
  name:       string
  visibility: number
  clouds:     IClouds
  dt:         number
  main:       IMain
  sys:        ISys
  weather:    IWeatherCurrent[]
  wind:       IWind5
}
// NOTE: delete in celanup
// export interface IOpenWeatherCombined {
//   // not available on forecast.list
//   base?:       string
//   cod?:        number
//   coord?:      ICoord
//   id?:         number
//   name?:       string
//   visibility?: number

//   clouds:     IClouds
//   dt:         number
//   main:       IMain
//   sys:        ISys
//   weather:    IWeatherCurrent[]
//   wind:       IWind5
// }

export interface IOpenWeatherForecast {
  cod:     string
  message: number
  cnt:     number
  list:    IList[]
  city:    ICity
}

interface ICoord {
  lon: number
  lat: number
}

interface IMain {
  temp:     number
  pressure: number
  humidity: number
  temp_min: number
  temp_max: number
}

interface ISys {
  type:    number
  id:      number
  message: number
  country: string
  sunrise: number
  sunset:  number
}

interface IWeatherCurrent {
  id:          number
  main:        string
  description: string
  icon:        string
}

interface IWeatherForecast {
  id:          number
  main:        MainEnum
  description: Description
  icon:        string
}

interface IWind5 {
  speed: number
  deg:   number
}

interface ICity {
  id:      number
  name:    string
  coord:   ICoord
  country: string
}

interface ICoord {
  lat: number
  lon: number
}

export interface IList {
  dt:      number
  main:    IMainClass
  weather: IWeatherForecast[]
  clouds:  IClouds
  wind:    IWind5
  snow:    ISnow
  sys:     ISys
  dt_txt:  string
}

interface IClouds {
  all: number
}

interface IMainClass {
  temp:       number
  temp_min:   number
  temp_max:   number
  pressure:   number
  sea_level:  number
  grnd_level: number
  humidity:   number
  temp_kf:    number
}

interface ISnow {
  '3h'?: number
}

interface ISys {
  pod: Pod
}

enum Pod {
  D = 'd',
  N = 'n',
}

enum Description {
  BrokenClouds = 'broken clouds',
  ClearSky = 'clear sky',
  FewClouds = 'few clouds',
  LightSnow = 'light snow',
  ScatteredClouds = 'scattered clouds',
}

enum MainEnum {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Snow = 'Snow',
}

export interface IOpenWeatherForecast16 {
  city:    ICity16
  cnt:     number
  cod:     string
  list:    IList16[]
  message: number
}

interface ICity16 {
  country:    string
  geoname_id: number
  iso2:       string
  lat:        number
  lon:        number
  name:       string
  population: number
  type:       string
}

export interface IList16 {
  clouds:   number
  deg:      number
  dt:       number
  humidity: number
  pressure: number
  snow?:    number
  speed:    number
  temp:     ITemp16
  weather:  IWeather16[]
}

interface ITemp16 {
  day:   number
  eve:   number
  max:   number
  min:   number
  morn:  number
  night: number
}

interface IWeather16 {
  description: string
  icon:        string
  id:          number
  main:        string
}
