import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import { COLORS, FONTS, SIZES } from './Theme/Theme';

export default function Picker({
    setFile,
    type
}) {
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({
                type: [type]
            })
            console.log(doc)
            setFile(doc)
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                console.log("User cancelled the upload", err);
            else
                console.log(err)
        }
    }

    return (
        <TouchableOpacity
            onPress={selectDoc}
            style={{
                height: 100,
                width: "88%",
                backgroundColor: COLORS.Primary2,
                borderRadius: SIZES.radius,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 35,
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
            <Text style={{ ...FONTS.h2, color: COLORS.black }}>Select Document</Text>
        </TouchableOpacity>
    );
}