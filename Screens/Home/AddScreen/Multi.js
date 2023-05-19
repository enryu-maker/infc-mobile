import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../../Components/Header'
import Back from '../../../Components/Buttons/Back'
import { COLORS, FONTS } from '../../../Components/Theme/Theme'
import FormInput from '../../../Components/InputForm'
import DropdownComponent from '../../../Components/Dropdown'
import { BRANCH, PATTERN, YEAR } from '../../../Components/Data'
import Picker from '../../../Components/Picker'
import DocumentPicker from 'react-native-document-picker';

import axiosIns, { baseURL } from '../../../Helper/Helper'
export default function Multi({
    navigation
}) {
    const [Year, setYear] = React.useState(null);
    const [Pattern, setPattern] = React.useState(null);
    const [Dept, setDept] = React.useState(null);
    const [File, setFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false)
    const uploadData = () => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', File);
        formData.append('year', Year);
        formData.append('pattern', Pattern);
        formData.append('dept', Dept);
        axiosIns.post(baseURL + '/api/user/addmultistudent/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res.data)
            setLoading(false)
        }
        ).catch((err) => {
            console.log(err)
            setLoading(false)
        }
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.Primary1
        }}>
            <Header
                leftComponent={
                    <Back
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />
                }
                title={"MULTI UPLOAD"}
                rightComponent={<View
                    style={{
                        height: 45,
                        width: 45,
                        marginRight: 12,
                    }}
                ></View>}
            />
            <ScrollView>
                <DropdownComponent
                    data={YEAR}
                    value={Year}
                    placeholder={"YEAR"}
                    setValue={setYear}
                />
                <DropdownComponent
                    data={PATTERN}
                    value={Pattern}
                    setValue={setPattern}
                    placeholder={"PATTERN"}
                />
                <DropdownComponent
                    data={BRANCH}
                    value={Dept}
                    setValue={setDept}
                    placeholder={"DEPARTMENT"}
                />
                <Picker setFile={setFile}
                    type={DocumentPicker.types.csv}
                
                />
            </ScrollView>
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
                }
                }
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        color: COLORS.black
                    }}
                >{"ADD"}</Text>
            </TouchableOpacity>
        </View>
    )
}