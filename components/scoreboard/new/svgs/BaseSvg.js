// @flow
import React from 'react';

export type SvgProps = {
  height: number,
  width: number,
  children: Array<any>,
};

function BaseSvg(props: SvgProps) {
  return (
    <svg
      shapeRendering="optimizeQuality"
      width={props.width}
      height={props.height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
}

export default BaseSvg;
