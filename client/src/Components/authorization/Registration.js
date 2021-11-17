import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import axios from 'axios'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import '../../styles/auth.css'
import {Fade} from "react-awesome-reveal";

const theme = createTheme({
    components: {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "#34495E;",
                    "&:hover": {
                        backgroundColor: "#34495E;"
                    },
                    "&$focused": {
                        backgroundColor: "#34495E;"
                    },
                    ".MuiFormControl-root:focused &:not($hover)": {
                        backgroundColor: "#34495E;"
                    }

                },
                colorSecondary:"#808080",
                underline: {
                    borderBottomColor: "#808080",
                    "&:before": {
                        borderBottomColor: "#808080"
                    },
                    "&:hover:not(.Mui-focused):before": {
                        borderBottomColor: "#808080"
                    },
                    "&:after": {
                        borderBottomColor: "#808080"
                    }
                }
            }
        },
        MuiInputLabel:{
            styleOverrides: {
                root: {
                    color: 'white'
                }
            }
        }
        // TODO: глазик у пароля сделать белым (найти нужный проп)
    }
});

const inputProps = {
    style: {
        color: 'white'
    }
};


const Registration = () => {

    const [Name1, setName1] = useState('');
    const handleChangeName1 = (e) => {
        setName1(e.target.value);
    }

    const [Name2, setName2] = useState('');
    const handleChangeName2 = (e) => {
        setName2(e.target.value);
    }

    const [Name3, setName3] = useState('');
    const handleChangeName3 = (e) => {
        setName3(e.target.value);
    }

    const [Username, setUsername] = useState('');
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const [Password, setPassword] = useState('');
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const [PasswordRepeat, setPasswordRepeat] = useState('');
    const handleChangePasswordRepeat = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async () => {
        // TODO: ошибка при несовпадении password и passwordrepeat
        const res = await axios.post('http://localhost:3001/users', {
            name1: this.state.value(Name1),
            name2: this.state.value(Name2),
            name3: this.state.value(Name3),
            username: this.state.value(Username),
            password: this.state.value(Password)
        }).catch(() => {})

        const loginRes = await axios.post('http://localhost:3001/auth/login', {
            username: this.state.value(Username),
            password: this.state.value(Password)
        }).catch(() => {})


        console.log(loginRes)
        if (res === undefined) return

        localStorage.setItem('access_token', loginRes.data.access_token)
    }

    return (
        <Fade>
            <form className='Registration'>
                <div className='Registration-p'>
                    Регистрация
                </div>
                <div className='Registration-form'>
                    <div className='Registration-form-input'>
                        <ThemeProvider theme={theme}>
                            <div className='Registration-form-input-only'>
                                <TextField  fullWidth id="name1" label="Фамилия" variant="filled" onChange={handleChangeName1} inputProps={inputProps}/>
                            </div>
                            <div className='Registration-form-input-only'>
                                <TextField fullWidth id="name2" label="Имя" variant="filled" onChange={handleChangeName2} inputProps={inputProps}/>
                            </div>
                            <div className='Registration-form-input-only'>
                                <TextField fullWidth id="name3" label="Отчество" variant="filled" onChange={handleChangeName3} inputProps={inputProps}/>
                            </div>
                            <div className='Registration-form-input-only'>
                                <TextField fullWidth id="login" label="Никнейм" variant="filled" onChange={handleChangeUsername} inputProps={inputProps}/>
                            </div>
                            <div className='Registration-form-input-only'>
                                <TextField fullWidth id="password" label="Пароль" variant="filled" type="password" onChange={handleChangePassword} inputProps={inputProps}/>
                            </div>
                            <div className='Registration-form-input-only'>
                                <TextField fullWidth id="passwordRepeat" label="Повторите пароль" variant="filled" type="password" onChange={handleChangePasswordRepeat} inputProps={inputProps}/>
                            </div>
                        </ThemeProvider>
                    </div>
                    <div className='Registration-form-submit'>
                        <CustomOrangeButtonWithText text='Подтвердить' onClick={handleSubmit}/>
                    </div>
                </div>
            </form>
        </Fade>
    );
};

export default Registration;




// логин пользователя
// const handleSubmit = async () => {
//     const res = await axios.post('http://localhost:3001/auth/login', {
//         username: 'aboba123',
//         password: 'lepsi'
//     }).catch(() => {})
//
//
//     console.log(res)
//     if (res === undefined) return
//
//     localStorage.setItem('access_token', res.data.access_token)
// }


// регистрация пользователя
// const handleSubmit = async () => {
//     const res = await axios.post('http://localhost:3001/users', {
//         name1: "Аскет",
//         name2: "Стас",
//         name3: "Эльпримович",
//         username: 'stasAsket',
//         password: 'XxxElPrimo228xxX???'
//     }).catch(() => {})
//
//     const loginRes = await axios.post('http://localhost:3001/auth/login', {
//         username: 'stasAsket',
//         password: 'XxxElPrimo228xxX???'
//     }).catch(() => {})
//
//
//     console.log(loginRes)
//     if (res === undefined) return
//
//     localStorage.setItem('access_token', loginRes.data.access_token)
// }