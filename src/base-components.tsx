import React, { FC } from 'react'
import { Text, View } from 'react-figma'
import tailwind from 'tailwind-rn'

declare global {
  const __render_figma__: number
}

export const Div: FC<{
  className?: string
  // text?: boolean
}> = ({
  className,
  // text = false,
  children,
}) => {
  if (__render_figma__ === 1) {
    const style = tailwind(className)
    if (children && typeof children === 'string') {
      return <Text style={style}>{children}</Text>
    }
    return <View style={style}>{children}</View>
  }
  return <div className={className}>{children}</div>
}
