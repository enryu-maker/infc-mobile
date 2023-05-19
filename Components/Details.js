import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from "./Theme/Theme"
export default function Details({
    title,
    value
}) {
    return (
        <View
            style={{
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                marginTop: 25,
            }}
        >
            <Text
                style={{
                    ...FONTS.h3,
                    color: COLORS.black,
                    marginStart: 35,
                }}
            >
                {title}
            </Text>
            <View
                style={{
                    width: "88%",
                    backgroundColor: COLORS.white,
                    alignSelf: "center",
                    justifyContent: "center",
                    marginTop: 6,
                    borderRadius: 12,
                    alignItems: "flex-start",
                    paddingStart: 18,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 12,
                    elevation: 5,
                    paddingVertical: 12,
                }}
            >
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.body3,
                    }}>
                    {value}
                </Text>
            </View>
        </View>
    )
}