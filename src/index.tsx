import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Artboard} from "./Artboard";
import 'tailwindcss/dist/tailwind.css';

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
    <div style={{display: "flex"}}>
        <Artboard />
    </div>
  ,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept()
}
