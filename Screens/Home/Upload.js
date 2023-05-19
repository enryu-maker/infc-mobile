import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../../Components/Header'
import Menu from '../../Components/Buttons/Menu'
import { YEAR, PATTERN, BRANCH } from '../../Components/Data'
import axiosIns, { baseURL } from '../../Helper/Helper'
import { COLORS, FONTS, SIZES } from '../../Components/Theme/Theme'
import DropdownComponent from '../../Components/Dropdown'
import Picker from '../../Components/Picker'
import Loader from '../../Components/Loader'
import DocumentPicker from 'react-native-document-picker';

export default function Upload({ navigation }) {
    const [loading, setLoading] = React.useState(false)
    const uploadData = () => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', File);
        formData.append('year', Year);
        formData.append('pattern', Pattern);
        formData.append('department', Dept);
        axiosIns.post(baseURL + '/api/user/upload/', formData, {
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
    const [Year, setYear] = React.useState(null);
    const [Pattern, setPattern] = React.useState(null);
    const [Dept, setDept] = React.useState(null);
    const [File, setFile] = React.useState(null);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.Primary1
            }}
        >
            <Loader loading={loading} />
            <Header
                leftComponent={<Menu
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                />}
                title={"UPLOAD"}
                rightComponent={<View
                    style={{
                        height: 45,
                        width: 45,
                        marginRight: 12,
                    }}
                ></View>}
            />
            <View
                style={{

                    flex: 1,
                    alignItems: "center",
                }}>
                <DropdownComponent
                    data={YEAR}
                    value={Year}
                    setValue={setYear}
                    placeholder={"SELECT YEAR"}
                />
                <DropdownComponent
                    data={PATTERN}
                    value={Pattern}
                    setValue={setPattern}
                    placeholder={"SELECT PATTERN"}
                />
                <DropdownComponent
                    data={BRANCH}
                    value={Dept}
                    setValue={setDept}
                    placeholder={"SELECT DEPARTMENT"}
                />
                <Picker
                    setFile={setFile}
                    type={DocumentPicker.types.pdf}
                />
            </View>
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
                    uploadData()
                }
                }
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        color: COLORS.black
                    }}
                >{"UPLOAD"}</Text>
            </TouchableOpacity>

        </View>
    )
}
