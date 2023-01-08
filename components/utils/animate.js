import { Animated, Easing } from "react-native";

// Reduces the boilerplate for the most used animation config
export const animate = (value, config) => {
  return Animated.timing(value, {
    toValue: config.toValue,
    ...config,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.quad),
  });
};
