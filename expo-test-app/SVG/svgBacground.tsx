import React from 'react';
import { Svg, Defs, LinearGradient, Stop, ClipPath, Rect, Path } from 'react-native-svg';

const SvgBackground = () => {
  return (
    <Svg viewBox='0 0 100 100'>
      <Defs>
        <ClipPath id='a' clipPathUnits='objectBoundingBox'>
          <Path d='M0 0L0.80 0 1 0.4 1 0.8 1 1 0.2 1 0 1 0 0.2z' />
        </ClipPath>
        <LinearGradient id='gradient' x1='0%' y1='100%' x2='0%' y2='0%'>
          <Stop offset='-8.64%' stopColor='#C4CEE0' />
          <Stop offset='96.85%' stopColor='#FAFBFF' />
        </LinearGradient>
      </Defs>
      <Rect
        fill='url(#gradient)'
        clipPath='url(#a)'
        x='-60'
        y='0'
        width='220%'
        height='100%'
      />
    </Svg>
  );
}

export default SvgBackground;
