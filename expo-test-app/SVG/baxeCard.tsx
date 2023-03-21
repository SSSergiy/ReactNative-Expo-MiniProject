import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

function BaxeCard(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G clipPath='url(#clip0_0_375)'>
        <Path
          d='M3.9 4h16.2c.239 0 .468.094.636.26A.883.883 0 0121 4.89V19.11a.883.883 0 01-.264.629.906.906 0 01-.636.26H3.9a.906.906 0 01-.636-.26A.883.883 0 013 19.11V4.89c0-.236.095-.462.264-.629A.906.906 0 013.9 4zm15.3 8H4.8v6.222h14.4V12zm0-3.556V5.778H4.8v2.666h14.4z'
          fill='#fff'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_0_375'>
          <Path fill='#fff' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BaxeCard;
