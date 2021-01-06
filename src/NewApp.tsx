import * as React from 'react'
import { Page, StyleSheet } from 'react-figma'
import {Artboard} from "./Artboard";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        fontFamily: "Inter"
    }
})

export const NewApp = () => {
  return (
    <Page isCurrent name="Tailwind" style={styles.page}>
      <Artboard />
    </Page>
  )
}
