import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Components/Theme/Theme'
import { Header } from '../../Components/Header'
import Back from '../../Components/Buttons/Back'
import Icon from 'react-native-vector-icons/Feather';
import axiosIns from '../../Helper/Helper'
import Loader from '../../Components/Loader'
import { showMessage } from 'react-native-flash-message'
export default function Tag({
    navigation,
    route
}) {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        setData(route.params.data)
    }, [])

    const handleScan = () => {
        setLoading(true)
        axiosIns.post('/device/operate/', {
            prn: data?.prn
        }
        ).then((res) => {
            setLoading(false)
            setData(res.data)
            showMessage({
                message:data?.tag_id === null ? "Successfully Assigned" : "Successfully Updated",
                type: "Success",
                backgroundColor: COLORS.green,
                color:COLORS.white,
                titleStyle:{
                  alignSelf:"center",
                  ...FONTS.h3
                },
                animationDuration:250
              });
        }
        ).catch((err) => {
            setLoading(false)
            showMessage({
                message:"Error while scanning",
                type: "Error",
                backgroundColor: COLORS.red,
                color:COLORS.white,
                titleStyle:{
                  alignSelf:"center",
                  ...FONTS.h3
                },
                animationDuration:250
              });
        }
        )
    }


    return (

        <View style={{
            flex: 1,
            backgroundColor: COLORS.Primary1
        }}>
            <Loader loading={loading} />
            <Header
                title={data?.tag_id === null ? "ASSIGN TAG" : "UPDATE TAG"}
                leftComponent={
                    <Back
                        onPress={() => {
                            navigation.goBack()
                        }
                        }
                    />
                }
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
                >{data?.tag_id === null ? "ASSIGN" : "UPDATE"}</Text>
            </TouchableOpacity>
        </View>
    )
}