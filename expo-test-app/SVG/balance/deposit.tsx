import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Deposit(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 5.833h2.5a.833.833 0 01.833.834v10a.834.834 0 01-.833.833h-15a.833.833 0 01-.833-.833V3.333A.833.833 0 012.5 2.5H15v3.333zM3.333 7.5v8.333h13.334V7.5H3.333zm0-3.333v1.666h10V4.167h-10zM15 11.667h2.5v.833H15v-.833z"
        fill="#fff"
      />
      <Path
        d="M10.833 11.664h2.5L10 14.997l-3.333-3.333h2.5V8.331h1.666v3.333z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Deposit
