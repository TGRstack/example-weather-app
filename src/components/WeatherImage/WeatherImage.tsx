import * as React from 'react'
import * as S from './WeatherImage.scss'

interface IProps {
  size: 'small' | 'large',
  img?: string,
}

export default function WeatherImage({size, img}: IProps): JSX.Element | null {
  const classes = size === 'small' ? S.small : S.large
  return img ? <img src={img} className={classes}  /> : null
}
WeatherImage.defaultProps = {
  size: 'small',
}
// style={{width: '100%', height: '100%'}}
