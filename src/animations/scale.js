const getAnimation = ({ controlVar, width }) => (
  {
    marginTop: controlVar.interpolate({
      inputRange: [0, 1],
      outputRange: [(width * 0.15), 0],
    }),
    transform: [
      {
        scale: controlVar,
      },
    ],
  }
);

export default getAnimation;
