import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../Components/Header'
import Menu from '../../Components/Buttons/Menu'
import axiosIns, { baseURL } from '../../Helper/Helper'
import { COLORS, FONTS } from '../../Components/Theme/Theme'
import Icon from 'react-native-vector-icons/Feather';
import Loader from '../../Components/Loader'

export default function Scan({ navigation }) {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const handleScan = () => {
        setLoading(true)
        axiosIns.get('/device/operate/').then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
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
                    // handleScan()
                    navigation.navigate("Scanop")
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