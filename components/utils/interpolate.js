import { Animated } from "react-native";

export const interpolate = (
  field: "scale" | "translateY",
  value: Animated.Value,
  config: Animated.InterpolationConfigType
) => {
  return {
    [field]: value.interpolate({
      // @ts-ignore
      inputRange: [0, 1],
      ...config,
    }),
  };
};

export const interpolateScale = (value, config) => {
  return interpolate("scale", value, config);
};

export const interpolateTranslateY = (value, config) => {
  return interpolate("translateY", value, config);
};
