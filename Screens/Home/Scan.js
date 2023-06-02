import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../Components/Header'
import Menu from '../../Components/Buttons/Menu'
import axiosIns, { baseURL } from '../../Helper/Helper'
import { COLORS, FONTS } from '../../Components/Theme/Theme'
import Icon from 'react-native-vector-icons/Feather';
import Loader from '../../Components/Loader'
import { showMessage } from 'react-native-flash-message'
export default function Scan({ navigation }) {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const handleScan = () => {
        setLoading(true)
        axiosIns.get('/device/operate/').then((res) => {
            setLoading(false)
            navigation.navigate("Scanop", {
                data: res.data
                })

        }).catch((err) => {
            showMessage({
                message: "Error while scanning",
                type: "Error",
                backgroundColor: COLORS.red,
                color:COLORS.white,
                titleStyle:{
                  alignSelf:"center",
                  ...FONTS.h3
                },
                animationDuration:250
              });
            setLoading(false)
        })
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.Primary1
            }}
        >
            <Loader loading={loading} />
            <Header
                leftComponent={<Menu
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                />}
                title={"SCAN"}
                rightComponent={<View
                    style={{
                        height: 45,
                        width: 45,
                        marginRight: 12,
                    }}
                ></View>}
            />
            <View
                style={{
                    height: "75%",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}
            >
                <Icon
                    name="radio"
                    size={220}
                    color={COLORS.black}
                />
            </View>
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: 80,
                    backgroundColor: COLORS.Primary2,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0
                }}
                onPress={() => {
                    handleScan()
                }
                }
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        color: COLORS.black
                    }}
                >{"SCAN"}</Text>
            </TouchableOpacity>
        </View>
    )
}