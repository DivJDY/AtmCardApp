/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SwipeImageStack from './src/components/AtmCardStack';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles/globalStyle';
import {card_data} from './db';
import SubHeader from './src/components/SubHeader';
import ShowModal from './src/components/ShowModal';

const App = () => {
  const [images, setImages] = useState(card_data);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setImages(card_data);
  }, []);

  const isSwipingRef = useRef(false);

  const handleSwipeRight = (index: number) => {
    if (!isSwipingRef.current) {
      isSwipingRef.current = true;
      setImages(currentImages => {
        const newImages = [...currentImages];
        const [removed] = newImages.splice(index, 1);
        newImages.push(removed);
        return newImages;
      });
      setTimeout(() => {
        isSwipingRef.current = false;
      }, 300);
    }
  };
  const Imagelist = [
    require('./assets/subheader/fingerprint_black.png'),
    require('./assets/subheader/flight_takeoff_black.png'),
    require('./assets/subheader/water_drop_black.png'),
    require('./assets/subheader/health_and_safety_black.png'),
    require('./assets/subheader/history_edu_black.png'),
    require('./assets/subheader/card_membership_black.png'),
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <SubHeader />
      <View style={{flex: 1, backgroundColor: '#252525'}}>
        <View style={[styles.subheaderView, {margin: 20}]}>
          {Imagelist.map((item, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={item} style={styles.subheader_img} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <GestureHandlerRootView>
          <View style={styles.container}>
            {images.map((imageUrl, index) => (
              <SwipeImageStack
                key={imageUrl.id}
                imageUrl={imageUrl.image}
                index={index}
                totalCards={images.length}
                onSwipeRight={handleSwipeRight}
                isTopCard={index === 0}
              />
            ))}
          </View>
        </GestureHandlerRootView>
        <TouchableOpacity
          style={styles.fabView}
          onPress={() => setModalVisible(true)}>
          <Image
            source={require('./assets/add_fab.png')}
            style={{width: 72, height: 72}}
          />
        </TouchableOpacity>
        <ShowModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
