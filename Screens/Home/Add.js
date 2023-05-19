import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../Components/Header'
import Menu from '../../Components/Buttons/Menu'
import axiosIns, { baseURL } from '../../Helper/Helper'
import { COLORS, FONTS } from '../../Components/Theme/Theme'
import { ADDDATA } from '../../Components/Data'
import Icon from 'react-native-vector-icons/Feather';
export default function Add({ navigation }) {
    const [Data, setData] = React.useState([])
    //   React.useEffect(() => {
    //     axiosIns.get(baseURL+'/api/user/getallstudents/')
    //     .then((res) => {
    //       console.log(res.data)
    //       setData(res.data)
    //     }
    //     ).catch((err) => {
    //       console.log(err)
    //     }
    //     )
    //   }, [])
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.Primary1
            }}
        >
            <Header
                leftComponent={<Menu
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                />}
                title={"Add"}
                rightComponent={<View
                    style={{
                        height: 45,
                        width: 45,
                        marginRight: 12,
                    }}
                ></View>}
            />
            <FlatList
                data={ADDDATA}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={{
                            height: 130,
                            width: "88%",
                            backgroundColor: COLORS.white,
                            alignSelf: "center",
                            justifyContent: "center",
                            marginTop: 12,
                            borderRadius: 12,
                            alignItems: "flex-start",
                            paddingStart: 18,
                            shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            elevation: 6,
                        }}
                        onPress={() => {
                            navigation.navigate(item.screen)
                        }
                        }
                    >
                        <Text
                            style={{
                                ...FONTS.h2,
                                textAlign: "center",
                                color: COLORS.black,
                                alignSelf: "center"
                            }}
                        >
                            {item.label}
                        </Text>
                        <Icon
                            name={item.icon}
                            size={50}
                            color={COLORS.black}
                            style={{
                                alignSelf: "center"
                            }}
                        />
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}