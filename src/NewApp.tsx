import * as React from 'react'
import { Page } from 'react-figma'
import {Artboard} from "./Artboard";

export const NewApp = () => {
  return (
    <Page isCurrent name="Tailwind" style={{ flexDirection: 'row' }}>
      <Artboard />
    </Page>
  )
}
