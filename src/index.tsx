import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { App } from './App'
// import './index.css'

// function domToFigma(el: JSX.Element): JSX.Element {}

const LowerX: React.FC<{
  className: string
  div: React.FC<React.HTMLAttributes<HTMLDivElement>>
}> = ({ children, div: Div2, ...props }) => <Div2 {...props}>{children}</Div2>

const x = (
  <LowerX className="test" div={() => <div />}>
    <span>yo</span>test
  </LowerX>
)
// window.x = x

ReactDOM.render(
  <React.StrictMode>
    <div>hello</div>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
