import React from 'react';
import BaseSvg from './BaseSvg';
import GradientFill from './GradientFill';
import type { Gradient } from '../../types/types';

function DoubleShadowTriangle(props: {
  leftGradient: Gradient,
  rightGradient: Gradient,
  width: number,
  height: number,
}) {
  const offset = 12;
  const doubleOffset = offset * 2;
  return (
    <BaseSvg width={props.width + doubleOffset} height={props.height}>
      <defs>
        <filter id="f3" x="0" y="0" width="300%" height="300%">
          <feOffset result="offOut" in="SourceAlpha" dx="-4" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
        <GradientFill
          start={props.leftGradient.start}
          stop={props.leftGradient.stop}
          id="leftGrad"
        />
        <GradientFill
          start={props.rightGradient.start}
          stop={props.rightGradient.stop}
          id="rightGrad"
        />
      </defs>
      <polygon
        shapeRendering="optimizeQuality"
        points={`
          0,${props.height}
          ${props.width + doubleOffset},${props.height}
          ${props.width + doubleOffset},0
          ${props.width}, 0
        `}
        fill="url(#rightGrad)"
      />
      <polygon
        shapeRendering="optimizeQuality"
        points={`
          0,${props.height}
          0,0
          ${props.width + offset},0
          ${offset},${props.height}
        `}
        fill="url(#leftGrad)"
        filter="url(#f3)"
      />
    </BaseSvg>
  );
}

export default DoubleShadowTriangle;
