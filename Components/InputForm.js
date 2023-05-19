import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import { FONTS, SIZES, COLORS } from "./Theme/Theme"

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    keytype = "",
    onPressIn,
    returnKeyType,
    col = COLORS.red
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{
                // width: '100%',
                justifyContent: "space-between",
                flexDirection: "row",
                alignSelf: "center"
            }}>
                <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{label}</Text>
                <Text style={{ color: col, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    height: 55 ,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.height > 800 ? SIZES.base : 10,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    width: '88%',
                    alignSelf: 'center',
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                    ...inputContainerStyle
                }}
            >
                {
                    prependComponent
                }
                <TextInput
                    style={{ flex: 1,...FONTS.h3, ...inputStyle }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                    returnKeyType={returnKeyType}
                    onPressIn={onPressIn}
                />
                {
                    appendComponent
                }
            </View>
        </View>
    )
}

export default FormInput