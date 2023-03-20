import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Battery(props) {
  return (
    <Svg
      width={25}
      height={12}
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        opacity={0.35}
        x={1.17197}
        y={0.833313}
        width={21}
        height={10.3333}
        rx={2.16667}
        stroke="#000"
      />
      <Path opacity={0.4} d="M23.672 4v4a2.17 2.17 0 000-4z" fill="#000" />
      <Rect
        x={2.67197}
        y={2.33331}
        width={18}
        height={7.33333}
        rx={1.33333}
        fill="#000"
      />
    </Svg>
  )
}

export default Battery
