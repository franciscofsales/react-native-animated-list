const getAnimation = ({ controlVar, width }) => {
  const animationRight = width || 0;
  return {
    opacity: animationRight === 0 ? 0 : 1,
    transform: [
      {
        translateX: controlVar.interpolate({
          inputRange: [0, 1],
          outputRange: [animationRight, 0],
        }),
      },
    ],
  };
};

export default getAnimation;
