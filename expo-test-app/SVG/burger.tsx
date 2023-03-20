import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Burger(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 0h5a1 1 0 011 1v4h-2V2h-4V0zM6 0v2H2v3H0V1a1 1 0 011-1h5zm6 18v-2h4v-3h2v4a1 1 0 01-1 1h-5zm-6 0H1a1 1 0 01-1-1v-4h2v3h4v2zM0 8h18v2H0V8z"
        fill="#979797"
      />
    </Svg>
  )
}

export default Burger