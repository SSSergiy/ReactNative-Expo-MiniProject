import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Qrcode(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.977 21.469v-1.534h-4.61v-4.6h4.61v3.067h3.073v3.067h-1.536v3.067H18.44v3.067h-3.073v-4.6h3.073v-1.534h1.537zm7.683 5.134a1 1 0 01-1 1h-5.146v-3.067h3.073V21.47h3.073v5.134zM0 1a1 1 0 011-1h11.293v12.268H0V1zm3.073 2.067v6.134H9.22V3.067H3.073zM15.367 0H26.66a1 1 0 011 1v11.268H15.367V0zm3.073 3.067v6.134h6.147V3.067H18.44zM0 15.335h12.293v12.268H1a1 1 0 01-1-1V15.335zm3.073 3.067v6.134H9.22v-6.134H3.073zm19.977-3.067h4.61v3.067h-4.61v-3.067zM4.61 4.6h3.073v3.067H4.61V4.6zm0 15.336h3.073v3.067H4.61v-3.067zM19.977 4.6h3.073v3.067h-3.073V4.6z"
        fill="#C4C4C4"
      />
    </Svg>
  )
}

export default Qrcode
