const path = (img: string, ext: string = 'png') => `/assets/weather/${img}.${ext}`

export default new Map([
  ['cloudy', path('cloudy')],
  ['cloudy-partial', path('partly_cloudy')],
  ['fog', path('fog')],
  ['rain', path('rain')],
  ['rain-cloudy', path('rain_s_cloudy')],
  ['rain-light', path('rain_light')],
  ['snow', path('snow')],
  ['sunny', path('sunny')],
  ['sunny-cloudy', path('sunny_s_cloudy')],
  ['sunny_rot', path('sunny', 'gif')],
  ['thunderstorms', path('thunderstorms')],
])
