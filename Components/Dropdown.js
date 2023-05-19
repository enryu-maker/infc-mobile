import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS } from './Theme/Theme';
import { Dropdown } from 'react-native-element-dropdown'

export default function DropdownComponent({
    data,
    value,
    setValue,
    placeholder
}) {
    const [isFocus, setIsFocus] = React.useState(false);

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: COLORS.Primary1 }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            itemContainerStyle={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
            }}
            itemTextStyle={{
                ...FONTS.h3
            }}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? placeholder : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                setIsFocus(false);
            }}
        />
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        ...FONTS.body3,
    },
    dropdown: {
        height: 55,
        width: "88%",
        backgroundColor: COLORS.white,
        marginTop:25,
        borderRadius: SIZES.radius,
        paddingHorizontal: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        ...FONTS.body3,
        alignSelf: 'center',

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,

        paddingHorizontal: 8,
        ...FONTS.body3,
    },
    placeholderStyle: {
        paddingHorizontal: 16,
        ...FONTS.body3,
    },
    selectedTextStyle: {
        ...FONTS.body3,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        ...FONTS.body3,

    },
});