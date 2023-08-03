import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
const AnimatedDots = () => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // colors
    const colors = [
      "rgba(50, 74, 89, 0.22)",
      "rgba(50, 74, 89, 0.44)",
      "rgba(50, 74, 89, 0.66)",
    ];

    const animation = Animated.loop(
      Animated.sequence(
        colors.map((color, index) =>
          Animated.timing(colorAnimation, {
            toValue: index,
            duration: 500, // Adjust speed of the animation
            useNativeDriver: false,
          })
        )
      ),
      { iterations: 15 } // number of iterations
    );

    // Start the animation
    animation.start();

    // Clean up the animation when the component unmounts
    return () => animation.stop();
  }, [colorAnimation]);

  return (
    <View style={styles.container}>
      {[1, 2, 3].map((dot, index) => (
        <Animated.View
          style={[
            styles.dot,
            {
              backgroundColor: colorAnimation.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  "rgba(50, 74, 89, 0.22)",
                  "rgba(50, 74, 89, 0.44)",
                  "rgba(50, 74, 89, 0.66)",
                ],
              }),
            },
          ]}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "72%",
    alignSelf: "center",
    gap: 7,
    marginTop: 7,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 100,
    marginHorizontal: 5,
  },
});

export default AnimatedDots;
