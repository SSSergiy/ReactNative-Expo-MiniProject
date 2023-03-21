import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Union(props) {
  return (
    <Svg
      width={26}
      height={33}
      viewBox="0 0 26 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.85 3.246c1.843 1.905 2.895 4.505 2.923 7.229l-.005.006a10.348 10.348 0 01-1.781 5.832 10.347 10.347 0 011.781 5.833c-.028 2.724-1.08 5.324-2.924 7.23-1.844 1.904-4.329 2.958-6.909 2.93H6.052a26.032 26.032 0 01-4.345-8.655h14.228a6.834 6.834 0 003.233-.804 7.252 7.252 0 002.538-2.26c.128.508.193 1.03.193 1.555v.03a4.06 4.06 0 01-.675 2.202 3.737 3.737 0 01-1.738 1.413 9.523 9.523 0 01-3.55.683H5.7a23.144 23.144 0 001.724 3.01h8.512c1.863.021 3.659-.74 4.99-2.116 1.332-1.376 2.091-3.254 2.112-5.222-.02-1.966-.78-3.845-2.112-5.22-1.332-1.377-3.127-2.138-4.99-2.117H3.463c-.032.498-.05 1-.05 1.505 0 .506.018 1.008.05 1.506h12.475a6.889 6.889 0 003.268-.822 6.126 6.126 0 011.919 2.116 9.552 9.552 0 01-5.187 1.529H1.036a26.716 26.716 0 01-.309-5.833c.053-.946.156-1.888.309-2.822h14.902c2.218-.006 4.374.772 6.124 2.21a7.49 7.49 0 00.977-3.716c-.02-1.967-.78-3.845-2.111-5.22C19.596 3.88 17.8 3.12 15.938 3.14H7.426A23.155 23.155 0 005.7 6.15h10.24a9.524 9.524 0 013.55.683c.701.275 1.307.768 1.738 1.413.43.645.666 1.413.675 2.203v.028c0 .526-.065 1.048-.193 1.556a7.254 7.254 0 00-2.538-2.26 6.834 6.834 0 00-3.233-.804H1.712A26.033 26.033 0 016.057.315h9.883c2.58-.029 5.066 1.025 6.91 2.93z"
        fill="url(#paint0_linear_0_422)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_422"
          x1={0.684082}
          y1={16.3096}
          x2={25.7729}
          y2={16.3096}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D7D0E6" />
          <Stop offset={1} stopColor="#A2B3CA" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Union
