import Images from './weatherImagePaths'

const Thunderstorm = 'Thunderstorm'
const Drizzle = 'Drizzle'
const Rain = 'Rain'
const Snow = 'Snow'
const Atmosphere = 'Atmosphere'
const Clear = 'Clear'
const Clouds = 'Clouds'

export enum IWeathers {
  Thunderstorm = 'Thunderstorm',
  Drizzle = 'Drizzle',
  Rain = 'Rain',
  Snow = 'Snow',
  Atmosphere = 'Atmosphere',
  Clear = 'Clear',
  Clouds = 'Clouds',
}

export const weathers = [
  Thunderstorm,
  Drizzle,
  Rain,
  Snow,
  Atmosphere,
  Clear,
  Clouds,
]

export default new Map([
  [200,	{
    category: Thunderstorm,
    code: 200,
    description: 'thunderstorm with light rain',
    img: Images.get('thunderstorms')
  }],
  [201,	{
    category: Thunderstorm,
    code: 201,
    description: 'thunderstorm with rain',
    img: Images.get('thunderstorms')
  }],
  [202,	{
    category: Thunderstorm,
    code: 202,
    description: 'thunderstorm with heavy rain',
    img: Images.get('thunderstorms')
  }],
  [210,	{
    category: Thunderstorm,
    code: 210,
    description: 'light thunderstorm',
    img: Images.get('thunderstorms')
  }],
  [211,	{
    category: Thunderstorm,
    code: 211,
    description: 'thunderstorm',
    img: Images.get('thunderstorms')
  }],
  [212,	{
    category: Thunderstorm,
    code: 212,
    description: 'heavy thunderstorm',
    img: Images.get('thunderstorms')
  }],
  [221,	{
    category: Thunderstorm,
    code: 221,
    description: 'ragged thunderstorm',
    img: Images.get('thunderstorms')
  }],
  [230,	{
    category: Thunderstorm,
    code: 230,
    description: 'thunderstorm with light drizzle',
    img: Images.get('thunderstorms')
  }],
  [231,	{
    category: Thunderstorm,
    code: 231,
    description: 'thunderstorm with drizzle',
    img: Images.get('thunderstorms')
  }],
  [232,	{
    category: Thunderstorm,
    code: 232,
    description: 'thunderstorm with heavy drizzle',
    img: Images.get('thunderstorms')
  }],
  [300,	{
    category: Drizzle,
    code: 300,
    description: 'light intensity drizzle',
    img: Images.get('rain-light'),
  }],
  [301,	{
    category: Drizzle,
    code: 301,
    description: 'drizzle',
    img: Images.get('rain-cloudy'),
  }],
  [302,	{
    category: Drizzle,
    code: 302,
    description: 'heavy intensity drizzle',
    img: Images.get('rain-cloudy'),
  }],
  [310,	{
    category: Drizzle,
    code: 310,
    description: 'light intensity drizzle rain',
    img: Images.get('rain-cloudy'),
  }],
  [311,	{
    category: Drizzle,
    code: 311,
    description: 'drizzle rain',
    img: Images.get('rain-cloudy'),
  }],
  [312,	{
    category: Drizzle,
    code: 312,
    description: 'heavy intensity drizzle rain',
    img: Images.get('rain-cloudy'),
  }],
  [313,	{
    category: Drizzle,
    code: 313,
    description: 'shower rain and drizzle',
    img: Images.get('rain-cloudy'),
  }],
  [314,	{
    category: Drizzle,
    code: 314,
    description: 'heavy shower rain and drizzle',
    img: Images.get('rain-cloudy'),
  }],
  [321,	{
    category: Drizzle,
    code: 321,
    description: 'shower drizzle',
    img: Images.get('rain-cloudy'),
  }],
  [500,	{
    category: Rain,
    code: 500,
    description: 'light rain',
    img: Images.get('rain-light'),
  }],
  [501,	{
    category: Rain,
    code: 501,
    description: 'moderate rain',
    img: Images.get('rain'),
  }],
  [502,	{
    category: Rain,
    code: 502,
    description: 'heavy intensity rain',
    img: Images.get('rain'),
  }],
  [503,	{
    category: Rain,
    code: 503,
    description: 'very heavy rain',
    img: Images.get('rain'),
  }],
  [504,	{
    category: Rain,
    code: 504,
    description: 'extreme rain',
    img: Images.get('rain'),
  }],
  [511,	{
    category: Rain,
    code: 511,
    description: 'freezing rain',
    img: Images.get('rain'),
  }],
  [520,	{
    category: Rain,
    code: 520,
    description: 'light intensity shower rain',
    img: Images.get('rain'),
  }],
  [521,	{
    category: Rain,
    code: 521,
    description: 'shower rain',
    img: Images.get('rain'),
  }],
  [522,	{
    category: Rain,
    code: 522,
    description: 'heavy intensity shower rain',
    img: Images.get('rain'),
  }],
  [531,	{
    category: Rain,
    code: 531,
    description: 'ragged shower rain',
    img: Images.get('rain'),
  }],
  [600,	{
    category: Snow,
    code: 600,
    description: 'light snow',
    img: Images.get('snow'),
  }],
  [601,	{
    category: Snow,
    code: 601,
    description: 'snow',
    img: Images.get('snow'),
  }],
  [602,	{
    category: Snow,
    code: 602,
    description: 'heavy snow',
    img: Images.get('snow'),
  }],
  [611,	{
    category: Snow,
    code: 611,
    description: 'sleet',
    img: Images.get('snow'),
  }],
  [612,	{
    category: Snow,
    code: 612,
    description: 'shower sleet',
    img: Images.get('snow'),
  }],
  [615,	{
    category: Snow,
    code: 615,
    description: 'light rain and snow',
    img: Images.get('snow'),
  }],
  [616,	{
    category: Snow,
    code: 616,
    description: 'rain and snow',
    img: Images.get('snow'),
  }],
  [620,	{
    category: Snow,
    code: 620,
    description: 'light shower snow',
    img: Images.get('snow'),
  }],
  [621,	{
    category: Snow,
    code: 621,
    description: 'shower snow',
    img: Images.get('snow'),
  }],
  [622,	{
    category: Snow,
    code: 622,
    description: 'heavy shower snow',
    img: Images.get('snow'),
  }],
  [701,	{
    category: Atmosphere,
    code: 701,
    description: 'mist',
    img: Images.get('fog'),
  }],
  [711,	{
    category: Atmosphere,
    code: 711,
    description: 'smoke',
    img: Images.get('fog'),
  }],
  [721,	{
    category: Atmosphere,
    code: 721,
    description: 'haze',
    img: Images.get('fog'),
  }],
  [731,	{
    category: Atmosphere,
    code: 731,
    description: 'sand, dust whirls',
    img: Images.get('fog'),
  }],
  [741,	{
    category: Atmosphere,
    code: 741,
    description: 'fog',
    img: Images.get('fog'),
  }],
  [751,	{
    category: Atmosphere,
    code: 751,
    description: 'sand',
    img: Images.get('fog'),
  }],
  [761,	{
    category: Atmosphere,
    code: 761,
    description: 'dust',
    img: Images.get('fog'),
  }],
  [762,	{
    category: Atmosphere,
    code: 762,
    description: 'volcanic ash',
    img: Images.get('fog'),
  }],
  [771,	{
    category: Atmosphere,
    code: 771,
    description: 'squalls',
    img: '', // FIXME: image for squalls
  }],
  [781,	{
    category: Atmosphere,
    code: 781,
    description: 'tornado',
    img: '', // FIXME: image for tornado
  }],
  [800,	{
    category: Clear,
    code: 800,
    description: 'clear sky',
    img: Images.get('sunny_rot'),
  }],
  [801,	{
    category: Clouds,
    code: 801,
    description: 'few clouds',
    img: Images.get('sunny-cloudy'),
  }],
  [802,	{
    category: Clouds,
    code: 802,
    description: 'scattered clouds',
    img: Images.get('cloudy-partial'),
  }],
  [803,	{
    category: Clouds,
    code: 803,
    description: 'broken clouds',
    img: Images.get('cloudy-partial'),
  }],
  [804,	{
    category: Clouds,
    code: 804,
    description: 'overcast clouds',
    img: Images.get('cloudy'),
  }],
])
