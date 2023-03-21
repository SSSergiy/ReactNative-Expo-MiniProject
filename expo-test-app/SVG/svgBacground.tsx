import * as React from "react"

function SvgBacground(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <defs>
        <clipPath id="a" clipPathUnits="objectBoundingBox">
          <path d="M0 0L0.86 0 1 0.2 1 0.8 1 1 0.2 1 0 1 0 0.2z" />
        </clipPath>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="-8.64%" stopColor="#C4CEE0" />
          <stop offset="96.85%" stopColor="#FAFBFF" />
        </linearGradient>
      </defs>
      <rect fill="url(#gradient)" clipPath="url(#a)" x="0" y="0" width="100%" height="100%" />
    </svg>
  )
}

export default SvgBacground;