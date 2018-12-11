import * as Stc from 'modules/ui/tgr/common.scss'
import * as React from 'react'

import * as Sc from '../common.scss'
import * as S from './TempMinMax.scss'

const Temp = ({value}: {value: number}) => <span className={Sc.celcius}>{value}</span>
const TemperatureMinMax = ({min, max}) => <div className={[S.container, Stc.spaceBetween].join(' ')}>
  <Temp value={min} /><Temp value={max} />
</div>

export default TemperatureMinMax
