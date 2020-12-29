import * as React from 'react'
// import { App } from './App'
import { NewApp as App } from './NewApp'

import 'react-figma/rpc'
import { render } from 'react-figma'

render(<App />)
console.log(<App />)

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}
