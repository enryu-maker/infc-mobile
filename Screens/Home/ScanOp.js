import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Components/Theme/Theme'
import { Header } from '../../Components/Header'
import Back from '../../Components/Buttons/Back'
import Details from '../../Components/Details'
import ImageView from "react-native-image-viewing";
import { baseURL } from '../../Helper/Helper'
export default function ScanOp({
    navigation,
    route
}) {
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        setData(route.params.data)
    }, [])

    const images = [{
        uri: baseURL + data?.hallticket,
    }
    ]
    const [visible, setIsVisible] = React.useState(false);
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.Primary1,
        }}>
            <Header
                leftComponent={
                    <Back
                        onPress={() => {
                            navigation.goBack()
                        }
                        }
                    />
                }
                title={"STUDENT DETAILS"}
                rightComponent={<View
                    style={{
                        height: 30,
                        width: 30,
                    }}
                ></View>}

            />
            <ScrollView>
                <Details
                    title={"NAME"}
                    value={data?.name}
                />
                <Details
                    title={"PRN"}
                    value={data?.prn}
                />
                <Details
                    title={"YEAR"}
                    value={data?.year}
                />
                <Details
                    title={"DEPARTMENT"}
                    value={data?.department}
                />
                <Text
                    style={{
                        ...FONTS.h3,
                        color: COLORS.black,
                        marginTop: 24,
                        alignSelf: "center"
                    }}
                >HALL TICKET</Text>

                <TouchableOpacity
                style={{
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
                        setIsVisible(true)
                    }}
                >
                    <Image

                        source={{ uri: baseURL + data?.hallticket }}
                        style={{
                            width: "88%",
                            height: 450,
                            alignSelf: "center",
                            margin: 12,
                            borderRadius: SIZES.radius,
                            resizeMode: "contain",
                            borderColor: COLORS.black,
                            
                        }}
                    />
                </TouchableOpacity>
                <ImageView
                    images={images}
                    imageIndex={0}
                    visible={visible}
                    onRequestClose={() => setIsVisible(false)}
                />
            </ScrollView>

        </View>
    )
}