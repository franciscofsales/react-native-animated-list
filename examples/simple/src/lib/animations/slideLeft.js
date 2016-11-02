const getAnimation = ({ controlVar, width }) => {
  const animationLeft = -width || 0;
  return {
    opacity: animationLeft === 0 ? 0 : 1,
    transform: [
      {
        translateX: controlVar.interpolate({
          inputRange: [0, 1],
          outputRange: [animationLeft, 0],
        }),
      },
    ],
  };
};

export default getAnimation;
