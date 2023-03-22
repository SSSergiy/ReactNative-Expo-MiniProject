import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function QuickPay(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_448_53)">
        <Path
          d="M.667 10A9.333 9.333 0 0010 19.333 9.333 9.333 0 0019.333 10 9.333 9.333 0 0010 .667 9.333 9.333 0 00.667 10z"
          fill="#FF3B61"
          stroke="#fff"
          strokeWidth={2}
        />
        <Path
          d="M5.833 10.833h7.5V12.5H10V15l-4.167-4.167zM10 7.5V5l4.167 4.167h-7.5V7.5H10z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_448_53">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default QuickPay
