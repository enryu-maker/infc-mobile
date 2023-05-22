import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Components/Theme/Theme'
import { Header } from '../../Components/Header'
import Back from '../../Components/Buttons/Back'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function StudentInfo({
    navigation,
    route
}) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.Primary1,
        }}>
            <Header
                title={"STUDENTS"}
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
            <FlatList
                data={route.params.data}
                renderItem={({ item }) =>
                    <View
                        style={{
                            height: 110,
                            width: "88%",
                            backgroundColor: COLORS.white,
                            alignSelf: "center",
                            justifyContent: "center",
                            marginTop: 12,
                            borderRadius: 12,
                            alignItems: "center",
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
                    >

                        <Text style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}>{item.name}</Text>
                        <Text style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}>{item.iprn}</Text>
                        <Text style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}>{item.prn}</Text>
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                height: 45,
                                width: 45,
                                backgroundColor: item.tag_id === null ? COLORS.Primary3 : COLORS.Primary2,
                                borderRadius: 6,
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "flex-end",
                                margin: 10,
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
                                navigation.navigate("Tag",{
                                    data:item
                                })
                            }}
                        >
                            <Icon name={item.tag_id === null ? "nfc-variant-off" : "nfc-variant"} size={30} color={COLORS.black} />

                        </TouchableOpacity>

                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>

    )
}