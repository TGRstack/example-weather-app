import Page from 'modules/ui/tgr/page'
import * as React from 'react'

import Routes from '../routes'
import './global.scss'
import { reopenAsMobileWindow } from './helpers'
// import Helmet from './Helmet'
// import './fonts'
import './reset.css'

export default function App() {
  (window as any).reopenMobile = reopenAsMobileWindow // tslint:disable-line no-any
  return <Page>
    {/* <Helmet /> */}
    <Routes />
  </Page>
}
