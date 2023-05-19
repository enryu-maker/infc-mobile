import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../Theme/Theme'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Back({
    onPress
}) {
    return (
        <TouchableOpacity
            style={{
                height: 45,
                width: 45,
                backgroundColor: COLORS.white,
                border: "none",
                borderRadius: SIZES.radius,
                color: COLORS.black,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                justifyContent:"center",
                alignItems:"center",
                marginLeft:12
            }}
            onPress={onPress}
        >
            <Icon name="chevron-back" size={30} color={COLORS.black} />

        </TouchableOpacity>
    )
}