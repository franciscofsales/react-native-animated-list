import { Animated } from 'react-native';
import scale from './scale';
import opacity from './opacity';
import slideLeft from './slideLeft';
import slideRight from './slideRight';

const animations = (animation, opts) => {
  switch (animation) {
    case 'scale':
      return scale(opts);
    case 'opacity':
      return opacity(opts);
    case 'slideLeft':
      return slideLeft(opts);
    case 'slideRight':
      return slideRight(opts);
    default:
      return scale(opts);
  }
};

export default animations;

export const enter = (controlVar, duration) => (
  Animated.timing(controlVar, {
    toValue: 1,
    duration,
  })
);


export const leave = (controlVar, duration) => {
  controlVar.setValue(1);
  return Animated.timing(controlVar, {
    toValue: 0,
    duration,
  });
};

export const reset = (controlVar) => {
  controlVar.setValue(1);
};
