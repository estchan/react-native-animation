import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text } from 'react-native';

import { ButtonTouchableOpacitySt, SafeAreaViewSt } from './App.style';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (fadeIn) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeIn, fadeAnim]);

  const onFadeInPressed = () => {
    setFadeIn(!fadeIn);
  };

  return (
    <>
      <SafeAreaViewSt>
        <ButtonTouchableOpacitySt onPress={onFadeInPressed}>
          <Text>Show text</Text>
        </ButtonTouchableOpacitySt>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text>Helllllllo</Text>
        </Animated.View>
      </SafeAreaViewSt>
    </>
  );
};

export default App;
