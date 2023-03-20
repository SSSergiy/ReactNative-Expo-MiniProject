import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseSlider(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 13.667A6.667 6.667 0 117 .334a6.667 6.667 0 010 13.333zm0-7.61L5.115 4.171l-.944.944L6.057 7 4.171 8.885l.944.944L7 7.943l1.885 1.886.944-.944L7.943 7l1.886-1.885-.944-.944L7 6.057z"
        fill="#91969F"
      />
    </Svg>
  )
}

export default CloseSlider
