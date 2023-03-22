import * as React from "react"

import Svg, { Path } from "react-native-svg"

function Arrow(props) {
  return (
    <Svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.129 5.62L5.106 1.482l1.06-1.09 5.834 6-5.833 6L5.106 11.3l4.023-4.138H0V5.62h9.129z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Arrow
