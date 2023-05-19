import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, COLORS, SIZES } from '../../Components/Theme/Theme'
import FormInput from '../../Components/InputForm'
import axios from 'axios'
import { baseURL } from '../../Helper/Helper'
import { LoginAction } from '../../Store/actions'
import { useDispatch } from 'react-redux'
import Loader from '../../Components/Loader'
export default function Login() {
    const dispatch = useDispatch()
    const [Email, setEmail] = React.useState("")
    const [Passwd, setPasswd] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    function handleLogin() {
        setLoading(true)
        axios.post(baseURL + '/api/user/login/', {
            email: Email,
            password: Passwd,
        }
        ).then((res) => {
            console.log(res.data.token.access)
            dispatch(LoginAction(res.data.token.access))
            setLoading(false)
        }
        ).catch((err) => {
            console.log(err.request)
            setLoading(false)
        }
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.Primary1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"

        }}>
            <Loader loading={loading} />
            <Text style={{ ...FONTS.largeTitle, color: COLORS.black }}>{"INFC"}</Text>
            <FormInput
            containerStyle={{
                marginTop: 15
            }}
                label={"Email"}
                value={Email}
                placeholder={"Enter Your Email"}
                onChange={text => {
                    setEmail(text);
                }}
            />
            <FormInput
            containerStyle={{
                marginTop: 25
            }}
                label={"Password"}
                value={Passwd}
                placeholder={"Enter Your Password"}
                onChange={text => {
                    setPasswd(text);
                }}
            />
            <TouchableOpacity
                style={{
                    width: 200,
                    backgroundColor: COLORS.Primary2,
                    height: 50,
                    borderRadius: SIZES.base,
                    marginTop: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                }}
                onPress={() => {
                    handleLogin()
                }
                }
            >
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >Login</Text>
            </TouchableOpacity>

        </View>
    )
}