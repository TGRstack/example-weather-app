import Page from 'modules/ui/tgr/page'
import * as React from 'react'

import Routes from '../routes'
import './global.scss'
// import Helmet from './Helmet'
// import './fonts'
import './reset.css'

export default function App() {
  return <Page>
    {/* <Helmet /> */}
    <Routes />
  </Page>
}
