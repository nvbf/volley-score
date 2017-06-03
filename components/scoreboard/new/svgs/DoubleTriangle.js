import React from 'react';
import GradientFill from './GradientFill';
import type { Gradient } from '../../types/types';

function DoubleTriangle(props: {
  leftGradient: Gradient,
  rightGradient: Gradient,
  width: number,
  height: number,
}) {
  return (
    <svg
      shapeRendering="optimizeQuality"
      width={props.width}
      height={props.height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
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
        points={`0,${props.height} 0,0 ${props.width},0`}
        fill="url(#leftGrad)"
      />
      <polygon
        shapeRendering="optimizeQuality"
        points={`0,${props.height} ${props.width},${props.height} ${props.width},0`}
        fill="url(#rightGrad)"
      />
    </svg>
  );
}

export default DoubleTriangle;
