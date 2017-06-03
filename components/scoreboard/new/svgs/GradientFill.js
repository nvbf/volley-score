import React from 'react';
import type { Gradient } from '../../types/types';

function GradientFill(props: Gradient & { id: string }) {
  return (
    <linearGradient id={props.id} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: props.start, stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: props.stop, stopOpacity: 1 }} />
    </linearGradient>
  );
}

export default GradientFill;
