import React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      className="prefix__illustration"
      width={1155}
      height={800}
      viewBox="0 0 1155 700"
      fill="none"
      {...props}
    >
      <Path
        d="M1155 94v360.111c-42.24 11.678-115.69 27.366-204.807 20.653-111.698-8.422-187.699-47.424-262.263-85.12 51.939-6.023 102.323-16.241 146.988-32.402 40.719-14.725 76.682-34.399 104.737-60.328 32.875-30.381 51.955-65.278 62.635-99.027C1086.48 149.653 1155 94 1155 94z"
        fill="#fff"
      />
      <Path
        d="M939.654 296.914c32.875-30.381 51.956-65.278 62.636-99.027-66.109 37.872-141.628 71.172-200.585 69.352-44.205-1.361-121.258-24.273-211.036-50.967C372.964 151.538 80.439 64.557.076 208.69c.133 28.117.067 113.236 0 198.528-.066 85.408-.132 170.988 0 199.68H1155V454.111c-161.103 44.544-317.742 11.039-464.428-63.13l-2.643-1.337c51.94-6.023 102.323-16.241 146.988-32.402 40.719-14.725 76.682-34.399 104.737-60.328z"
        fill="#22a6b3"
      />
      <Path
        opacity={0.18}
        d="M1155 454.111v152.787H.229c18.27-48.732 73.481-174.241 205.135-245.261 90.91-49.044 176.871-49.662 216.179-49.485 112.901.513 188.862 38.289 266.386 77.492C837.515 465.266 990.185 499.681 1155 454.111z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
