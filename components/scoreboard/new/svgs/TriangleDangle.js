import React from 'react';
import GradientFill from './GradientFill';
import type { Gradient } from '../../types/types';

function TriangleDangle(props: {
  triangleGradient: Gradient,
  dangleGradient: Gradient,
  triangleWidth: number,
  dangleWidth: number,
  height: number,
}) {
  return (
    <svg
      shapeRendering="optimizeQuality"
      width={props.triangleWidth + props.dangleWidth}
      height={props.height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GradientFill
          start={props.triangleGradient.start}
          stop={props.triangleGradient.stop}
          id="triangleGrad"
        />
        <GradientFill
          start={props.dangleGradient.start}
          stop={props.dangleGradient.stop}
          id="dangleGrad"
        />
      </defs>
      <polygon
        points={`0,${props.height} 0,0 ${props.triangleWidth},0`}
        fill="url(#triangleGrad)"
      />
      <polygon
        points={`
          0,${props.height}
          ${props.dangleWidth},${props.height}
          ${props.triangleWidth + props.dangleWidth},0
          ${props.triangleWidth},0
        `}
        fill="url(#dangleGrad)"
      />
    </svg>
  );
}

export default TriangleDangle;
