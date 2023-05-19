import { View, Text,Platform } from 'react-native'
import React from 'react'
import { COLORS,FONTS,SIZES } from "./Theme/Theme"
export const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent,img ,imgstyle}) => {
    return (
        <View
            style={{
                // flex:1,
                flexDirection: 'row',
                alignItems:"center",
                alignSelf:'center',
                marginTop:Platform.OS=="android" ? 0 :33,
                justifyContent:"space-evenly",
                height:80,
                backgroundColor:COLORS.Primary2,
                borderBottomColor:COLORS.white,
                borderBottomWidth:2,
                ...containerStyle,
            }}
        >
            {
                leftComponent
            }
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{  ...FONTS.h2,color:COLORS.text,lineHeight:35, ...titleStyle}}>{title}</Text>
            </View>
            {
                rightComponent
            }

        </View>
        
    )
}