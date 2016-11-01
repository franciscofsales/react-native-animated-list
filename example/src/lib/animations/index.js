import { Animated } from 'react-native';
import scale from './scale';
import opacity from './opacity';

export default animations = (animation, opts) => {
  switch (animation) {
    case 'scale':
      return scale(opts);
    case 'opacity':
      return opacity(opts);
    default:
      return opacity;

  }
}

export const Enter = (controlVar, duration) => {
  return Animated.timing(controlVar, {
    toValue  : 1,
    duration : duration
  });
};

export const Leave = (controlVar, duration) => {
  controlVar.setValue(1);
  return Animated.timing(controlVar, {
    toValue: 0,
    duration: duration,
  });
}

export const Reset = (controlVar) => {
  controlVar.setValue(1);
}
