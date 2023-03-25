import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Elips(props) {
  return (
    <Svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={6}
        cy={6.3913}
        r={5}
        fill="#FF3B61"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Elips
