import * as React from 'react'
import { Frame, Page, View, Text, Component, StyleSheet } from 'react-figma'

import * as facebookIcon from './icons/001-facebook.png'
import * as twitterIcon from './icons/002-twitter.png'
import * as whatsappIcon from './icons/003-whatsapp.png'
import * as skypeIcon from './icons/006-skype.png'
import * as youtubeIcon from './icons/008-youtube.png'
import * as instagramIcon from './icons/011-instagram.png'

const styles = StyleSheet.create({
  frame: {
    padding: 10,
  },
  component: {
    marginTop: 10,
  },
  sizingBlock: {
    backgroundColor: '#C4C4C4',
  },
  icon: {
    width: 16,
    height: 16,
    padding: 20,
    backgroundColor: '#ffffff',
    backgroundSize: 'contain',
    borderRadius: 5,
  },
  sizingDescription: {
    fontSize: 8,
    marginTop: 4,
  },
  hint: {
    fontSize: 6,
    marginTop: 2,
    color: '#a0a0a0',
  },
  heading: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
  },
})

const SpaceFrame = () => {
  return (
    <Frame name="Space" style={styles.frame}>
      <Text style={styles.heading}>Space</Text>

      <Component name="SizingXSmall" style={styles.component}>
        <View style={[styles.sizingBlock, { width: 8, height: 8 }]} />
      </Component>
      <span className="mt-1 text-sm">X-Small</span>
      <span className="text-xs mt-0.5 text-gray-500">8px</span>

      <Component name="SizingSmall" style={styles.component}>
        <View style={[styles.sizingBlock, { width: 16, height: 16 }]} />
      </Component>
      {/* <Div style={styles.sizingDescription}>Small</Div>
      <Div style={styles.hint}>16px</Div> */}

      <Component name="SizingMedium" style={styles.component}>
        <View style={[styles.sizingBlock, { width: 24, height: 24 }]} />
      </Component>
      {/* <Div style={styles.sizingDescription}>Medium</Div>
      <Div style={styles.hint}>24px</Div> */}

      <Component name="SizingLarge" style={styles.component}>
        <View style={[styles.sizingBlock, { width: 44, height: 44 }]} />
      </Component>
      <Text style={styles.sizingDescription}>Large</Text>
      <Text style={styles.hint}>44px</Text>

      <Component name="SizingXLarge" style={styles.component}>
        <View style={[styles.sizingBlock, { width: 64, height: 64 }]} />
      </Component>
      <Text style={styles.sizingDescription}>X-Large</Text>
      <Text style={styles.hint}>64px</Text>
    </Frame>
  )
}

const TypeFrame = (props) => {
  return (
    <Frame name="Type" style={[styles.frame, props.style]}>
      <Text style={styles.heading}>Type</Text>

      <Component name="HeaderH1" style={styles.component}>
        <Text style={{ fontSize: 64 }}>Header 1</Text>
      </Component>
      <Text style={styles.hint}>64px</Text>

      <Component name="HeaderH2" style={styles.component}>
        <Text style={{ fontSize: 44 }}>Header 2</Text>
      </Component>
      <Text style={styles.hint}>44px</Text>

      <Component name="HeaderH3" style={styles.component}>
        <Text style={{ fontSize: 24 }}>Heading 3</Text>
      </Component>
      <Text style={styles.hint}>24px</Text>

      <Component name="HeaderH4" style={styles.component}>
        <Text style={{ fontSize: 16 }}>HEADER 4</Text>
      </Component>
      <Text style={styles.hint}>16px</Text>

      <Component name="RegularText" style={styles.component}>
        <Text style={{ fontSize: 16 }}>Regular text</Text>
      </Component>
      <Text style={styles.hint}>16px</Text>

      <Component name="SmallText" style={styles.component}>
        <Text style={{ fontSize: 14 }}>Small text</Text>
      </Component>
      <Text style={styles.hint}>14px</Text>

      <Component name="XSmallText" style={styles.component}>
        <Text style={{ fontSize: 11 }}>X-Small text</Text>
      </Component>
      <Text style={styles.hint}>11px</Text>
    </Frame>
  )
}

const IconsFrame = (props) => {
  return (
    <Frame name="Icons" style={[styles.frame, props.style]}>
      <Text style={styles.heading}>Icons</Text>

      <Component name="IconFacebook" style={styles.component}>
        <View
          style={[styles.icon, { backgroundImage: facebookIcon.default }]}
        />
      </Component>
      <Component name="IconTwitter" style={styles.component}>
        <View style={[styles.icon, { backgroundImage: twitterIcon.default }]} />
      </Component>
      <Component name="IconWhatsapp" style={styles.component}>
        <View
          style={[styles.icon, { backgroundImage: whatsappIcon.default }]}
        />
      </Component>
      <Component name="IconSkype" style={styles.component}>
        <View style={[styles.icon, { backgroundImage: skypeIcon.default }]} />
      </Component>
      <Component name="IconYoutube" style={styles.component}>
        <View style={[styles.icon, { backgroundImage: youtubeIcon.default }]} />
      </Component>
      <Component name="IconInstagram" style={styles.component}>
        <View
          style={[styles.icon, { backgroundImage: instagramIcon.default }]}
        />
      </Component>
    </Frame>
  )
}

export const NewApp = () => {
  return (
    <Page isCurrent name="Design system" style={{ flexDirection: 'row' }}>
      <SpaceFrame />
      <button className="inline-flex items-center px-6 py-3 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base font-medium text-white">
        Button text
      </button>

      <TypeFrame style={{ marginLeft: 50 }} />
      <IconsFrame style={{ marginLeft: 50 }} />
    </Page>
  )
}
