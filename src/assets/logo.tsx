import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={27} {...props}>
    <path
      d="M59.613 0 0 73.513l59.9 77.096h32.959L33.246 73.657 92.429.287Z"
      style={{
        fill: "#656d57",
        fillOpacity: 1,
        stroke: "none",
      }}
      transform="scale(.13347 .17678)"
    />
    <path
      d="m178.553 49.869-59.234 102.596h119.563zM314.275 49.723 255.04 152.319h119.563ZM246.275 105.826 187.04 3.229h119.563z"
      style={{
        fill: "#adadad",
        fillOpacity: 1,
        stroke: "none",
      }}
      transform="scale(.13347 .17678)"
    />
  </svg>
)
export default SvgComponent
