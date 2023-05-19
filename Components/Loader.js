import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import { COLORS } from './Theme/Theme';

const Loader = (props) => {
  const {loading,boxstyle, ...attributes} = props;
  return (
    <Modal
      transparent={true}
      animationType={"fade"}
      visible={loading}
      onRequestClose={() => {
        // console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={[styles.activityIndicatorWrapper,{...boxstyle}]}>
          <ActivityIndicator
            animating={true}
            color={COLORS.Primary2}
            size="large"

            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: 120,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // ...boxstyle
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});