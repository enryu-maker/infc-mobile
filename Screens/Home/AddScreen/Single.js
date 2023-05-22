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
import Loader from '../../../Components/Loader'
export default function Single({
    navigation
}) {
    const [Year, setYear] = React.useState(null);
    const [Pattern, setPattern] = React.useState(null);
    const [Dept, setDept] = React.useState(null);
    const [loading, setLoading] = React.useState(false)
    const [iprn, setIprn] = React.useState(null)
    const [prn, setPrn] = React.useState(null)
    const [name, setName] = React.useState(null)

    const uploadData = () => {
        setLoading(true)
        axiosIns.post(baseURL + '/api/user/studentinfo/', {
            year: Year,
            pattern: Pattern,
            department: Dept,
            iprn: iprn,
            prn: prn,
            name: name
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setLoading(false)
            showMessage({
                message:"Successfully Added Student",
                type: "Success",
                backgroundColor: COLORS.green,
                color:COLORS.white,
                titleStyle:{
                  alignSelf:"center",
                  ...FONTS.h3
                },
                animationDuration:250
              });
        }
        ).catch((err) => {
            setLoading(false)
            showMessage({
                message:"Error while adding student",
                type: "Success",
                backgroundColor: COLORS.green,
                color:COLORS.white,
                titleStyle:{
                  alignSelf:"center",
                  ...FONTS.h3
                },
                animationDuration:250
              });
        }
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.Primary1
        }}>
            <Loader loading={loading} />
            <Header
                leftComponent={
                    <Back
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />
                }
                title={"SINGLE UPLOAD"}
                rightComponent={<View
                    style={{
                        height: 45,
                        width: 45,
                        marginRight: 12,
                    }}
                ></View>}
            />
            <ScrollView>
                <FormInput
                    value={iprn}
                    placeholder={"IPRN"}
                    onChange={(text) => {
                        setIprn(text)
                    }
                    }
                />
                <FormInput
                    value={prn}
                    placeholder={"PRN"}
                    onChange={(text) => {
                        setPrn(text)
                    }
                    }
                />
                <FormInput
                    value={name}
                    placeholder={"NAME"}
                    onChange={(text) => {
                        setName(text)
                    }
                    }
                />
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
                    uploadData()
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