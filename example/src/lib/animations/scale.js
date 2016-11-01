const getAnimation = (controlVar) => {
  return {
    marginTop: controlVar.interpolate({
          inputRange:[0,1],
          outputRange:[30, 0]
        }),
        transform: [
          {
            scale: controlVar
          }
        ],
  };
}

export default getAnimation;
