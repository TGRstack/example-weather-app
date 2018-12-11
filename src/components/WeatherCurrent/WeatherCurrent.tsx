import * as React from 'react'

import { IWeatherData, IWeatherItem, TempMinMax, WeatherImage, } from '..'
import * as S from './WeatherCurrent.scss'

interface IProps {
  data: IWeatherItem,
  meta: IWeatherData,
}

export default function WeatherCurrent({data, meta}: IProps): JSX.Element {
  const Header = () => <header className={S.header}>
    <h1>{meta.city.name}</h1>
    <h2>{data.condition.name}</h2>
  </header>

  // Content
  const Image = () => <div className={S.content}>
    <WeatherImage img={data.condition.image} size="large" />
  </div>
  const Condition = () => <div className={S.content}>
    <span>{data.condition.description}</span>
  </div>

  // <footer /> is something different
  const Footer = () => <div className={S.footer}>
    <div className={S.today}>Today</div>
    <TempMinMax min={data.temp.low} max={data.temp.high}  />
  </div>

  return  <div className={S.container}>
     <Header />
     <Image />
     <Condition />
     <Footer />
   </div>
}
