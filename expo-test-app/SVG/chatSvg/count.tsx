import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Count(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.167 10.391a9.333 9.333 0 009.333 9.334 9.333 9.333 0 009.333-9.334A9.333 9.333 0 0010.5 1.058a9.333 9.333 0 00-9.333 9.333z"
        fill="#FF3B61"
        stroke="#FBFBFB"
        strokeWidth={2}
      />
      <Path
        d="M10.57 10.298l-2.59 2.67v1.09h5.26v-1.33h-3.22l1.63-1.61c.77-.8 1.34-1.58 1.34-2.33 0-1.1-.99-1.81-2.39-1.81-.99 0-1.94.39-2.8 1.04l.62 1.18c.63-.54 1.35-.88 1.95-.88.61 0 .96.26.96.71 0 .34-.31.82-.76 1.27z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Count
