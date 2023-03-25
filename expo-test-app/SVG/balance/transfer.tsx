import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Transfer(props) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.667 4.667v-2.5H2.333v2.5h13.334zm0 1.666H2.333v7.5h13.334v-7.5zM1.5.5h15a.833.833 0 01.833.833v13.334a.834.834 0 01-.833.833h-15a.833.833 0 01-.833-.833V1.333A.833.833 0 011.5.5z"
        fill="#fff"
      />
      <Path
        d="M9.524 7.691v1.667H5.357v1.666h4.167v1.667l3.333-2.5-3.333-2.5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Transfer
