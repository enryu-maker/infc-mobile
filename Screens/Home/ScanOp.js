import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Components/Theme/Theme'
import { Header } from '../../Components/Header'
import Back from '../../Components/Buttons/Back'
import Details from '../../Components/Details'
import ImageViewer from 'react-native-image-zoom-viewer';
export default function ScanOp({
    navigation,
    route
}) {
    const images = [{
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    }
    ]
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
                    value={"Akif Abualam Khan"}
                />
                <Details
                    title={"PRN"}
                    value={"72035217H"}
                />
                <Details
                    title={"YEAR"}
                    value={"2019"}
                />
                <Details
                    title={"DEPARTMENT"}
                    value={"Computer Engineering"}
                />
                <ImageViewer 
                enableImageZoom={true}
                imageUrls={images}/>
            </ScrollView>

        </View>
    )
}