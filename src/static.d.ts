/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.sass' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.styl' {
  const classes: { [key: string]: string }
  export default classes
}

/* CSS */
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'
declare module '*.styl'

/* IMAGES */
declare module '*.svg' {
  const ref: string
  export default ref
}
declare module '*.bmp' {
  const ref: string
  export default ref
}
declare module '*.gif' {
  const ref: string
  export default ref
}
declare module '*.jpg' {
  const ref: string
  export default ref
}
declare module '*.jpeg' {
  const ref: string
  export default ref
}
declare module '*.png' {
  const ref: string
  export default ref
}

/* CUSTOM: ADD YOUR OWN HERE */
interface ImportMetaHot {
  /** Accept the HMR update. */
  accept(
    callback?: (update: {
      /** The newer version of the current module */
      module: unknown
    }) => void,
  ): void
  /** Accept the HMR update with dependencies update. */
  accept(
    dependencies: readonly string[],
    callback: (update: {
      /** The newer version of the current module */
      module: unknown
      /** The newer version of dependencies. Order is same as the first argument. */
      deps: unknown[]
    }) => void,
  ): void
  /** Cleanup side-effects before load the newer version of this module. */
  dispose(callback: () => void): void
  /** Mark the HMR as invalidated to reload the whole page. */
  invalidate(): void
  /** Mark this module as HMR incompatible, always reload the page. */
  decline(): void
  /** See https://github.com/pikapkg/esm-hmr#importmetahotdata */
  data: unknown
}

interface ImportMeta {
  url: string
  // TypeScript Bug: https://github.com/microsoft/TypeScript/issues/41468
  // When TS bug is fixed and ecosystem has upgraded, then it will be safe
  // to change `hot` to the more correct "possibly undefined" (hot?: ...).
  readonly hot: ImportMetaHot
  readonly env: {
    readonly [key: string]: any
    readonly SNOWPACK_PUBLIC_API_URL: string
    readonly MODE: string
    readonly NODE_ENV: string
    readonly SSR?: boolean
  }
}
