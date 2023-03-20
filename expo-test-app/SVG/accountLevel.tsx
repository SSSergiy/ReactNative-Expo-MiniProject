import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AccountLevel(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 15.243v6.872a.5.5 0 01-.757.43L12 19.997l-4.243 2.546a.499.499 0 01-.757-.43v-6.87a8 8 0 1110 0zm-5-.245a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z"
        fill="#fff"
      />
    </Svg>
  )
}

export default AccountLevel
