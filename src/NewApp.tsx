import * as React from 'react'
import { Page, StyleSheet } from 'react-figma'
import {Artboard} from "./Artboard";

const styles = StyleSheet.create({
    page: {
        fontSize: 16,
        lineHeight: "150%",
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
