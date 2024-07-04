import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    position: 'absolute',
    width: width - 40,
    height: height - 200,
  },
  card: {
    marginLeft: '9%',
    marginTop: 20,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 200,
  },

  // text styles
  txt: {color: '#fff', fontWeight: 800},
  txt1: {
    color: '#fff',
    fontWeight: 800,
    fontSize: 24,
    marginTop: 20,
  },
  subheader_img: {width: 34, height: 34},
  tipsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  subheaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '40%',
    marginHorizontal: 20,
  },
});
