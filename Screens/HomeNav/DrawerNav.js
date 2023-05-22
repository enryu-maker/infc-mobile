import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React,{useContext} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {COLORS, SIZES, FONTS, images} from '../../Components/Theme/Theme';
import { LogoutAction } from '../../Store/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';

export default function Drawercontent(props) {
  const dispatch = useDispatch()
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
            marginTop:8
          }}
          onPress={()=>{
            props.navigation.closeDrawer()
          }}
          >
            <Icon name="menu-unfold" size={30} color={COLORS.black} style={{
              alignSelf:"center"
            }}/>
          </TouchableOpacity>
        {/* <Drawer.Section style={[styles.drawerSection]}> */}
          <DrawerItem
          icon={({color, size}) => (
            <Icon name="home" color={COLORS.black} size={30} />
          )}
            label="Home"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
          icon={({color, size}) => (
            <Icon name="upload" color={COLORS.black} size={30} />
          )}
            label="Upload"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Upload');
            }}
          />
          <DrawerItem
          icon={({color, size}) => (
            <Icon name="adduser" color={COLORS.black} size={30} />
          )}
            label="Add"
            labelStyle={[FONTS.body3, {letterSpacing: 2, color: COLORS.black}]}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('Add');
            }}
          />
          <DrawerItem
          icon={({color, size}) => (
            <Icon name="scan1" color={COLORS.black} size={30} />
          )}
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
          icon={({color, size}) => (
            <Icon name="logout" color={COLORS.red} size={30} />
          )}
          label="Logout"
          labelStyle={[
            FONTS.body3,
            {letterSpacing: 2, color: COLORS.red, fontWeight: 'bold'},
          ]}
          onPress={() => {
            dispatch(LogoutAction())
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