import React from 'react';
import {Image, Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {styles} from '../../styles/globalStyle';

const {width} = Dimensions.get('window');

const SWIPE_THRESHOLD = width * 0.4;

const SwipeImageStack = ({
  imageUrl,
  index,
  totalCards,
  onSwipeRight,
  isTopCard,
}: any) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      if (isTopCard) {
        translateX.value = ctx.startX + event.translationX;
      }
    },
    onEnd: event => {
      if (isTopCard && event.translationX > SWIPE_THRESHOLD) {
        translateX.value = withSpring(width);
        runOnJS(onSwipeRight)(index);
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  //   console.log('imandjndjn', imageUrl);

  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {zIndex: totalCards - index},
        animatedStyle,
        {
          top: index * 10,
          left: index * 5,
        },
      ]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.card}>
          <Image source={imageUrl} style={styles.image} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default SwipeImageStack;
