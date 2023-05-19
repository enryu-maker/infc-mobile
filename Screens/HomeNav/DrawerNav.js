import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React,{useContext} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {COLORS, SIZES, FONTS, images} from '../../Components/Theme/Theme';
import axiosIns, { baseURL } from '../../Helper/Helper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Logout, UserData } from '../../Store/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function Drawercontent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
        {...props}
        style={{borderBottomWidth: 0.8, borderBottomColor: COLORS.Primary2}}>
          <TouchableOpacity
          style={{
            flex:1,
            height:45,
            width:45,
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            justifyContent:"center",
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
            alignSelf:"flex-end",
            marginRight:20,
          }}
          onPress={()=>{
            props.navigation.closeDrawer()
          }}
          >
            <Icon name="cross" size={30} color={COLORS.black} style={{
              alignSelf:"center"
            }}/>
          </TouchableOpacity>
        {/* <Drawer.Section style={[styles.drawerSection]}> */}
          <DrawerItem
            label="Home"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            label="Upload"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Upload');
            }}
          />
          <DrawerItem
            label="Add"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Add');
            }}
          />
          <DrawerItem
            label="Scan"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Scan');
            }}
          />
        {/* </Drawer.Section> */}
        </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}> */}
        <DrawerItem
        style={{paddingBottom:25}}
          // icon={({color, size}) => (
          //   <Image
          //     source={images.logout}
          //     style={[{height: 25, width: 25, tintColor: "#ff4d4d"}]}
          //   />
          // )}
          label="Logout"
          labelStyle={[
            FONTS.body3,
            {letterSpacing: 2, color: COLORS.red, fontWeight: 'bold'},
          ]}
          onPress={() => {
            dispatch(Logout())
          }}
        />
      {/* </Drawer.Section> */}
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 25,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: COLORS.white,
  },
  caption: {
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 1,
    color: COLORS.white,
  },
  row: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: COLORS.white,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopWidth: 0.8,
    borderTopColor: COLORS.white,
    // borderTopColor: COLORS.lightGray1,
    // borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});