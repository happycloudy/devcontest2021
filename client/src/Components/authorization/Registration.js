import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import axios from 'axios'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import '../../styles/auth.css'
import {Fade} from "react-awesome-reveal";
import {useDispatch} from "react-redux";
import {logInAction} from "./reducers/authReducer";
import {useNavigate} from "react-router-dom";
import DialogWindow from "../global/DialogWindow";

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
                colorSecondary: "#808080",
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
        MuiInputLabel: {
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
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [error, setError] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeName1 = (e) => {
        setName1(e.target.value);
    }

    const handleChangeName2 = (e) => {
        setName2(e.target.value);
    }

    const handleChangeName3 = (e) => {
        setName3(e.target.value);
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        handlePasswordEquals()
    }

    const handleChangePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value);
        handlePasswordEquals()
    }

    const handlePasswordEquals = () => {
        return password === passwordRepeat && password !== '';
    }

    const handleSubmit = async () => {
        if(!handlePasswordEquals()){
            console.log(password, passwordRepeat)
            setErrorPass(true)
            setTimeout(() => {
                setErrorPass(false)
            }, 1000)
            return
        }

        const res = await axios.post('http://localhost:3001/users', {
            name1: name1,
            name2: name2,
            name3: name3,
            username: username,
            password: password
        }).catch(()=>{
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1000)
        })
        if (res === undefined) return

        const loginRes = await axios.post('http://localhost:3001/auth/login', {
            username: username,
            password: password
        }).catch(() => {})
        if (loginRes === undefined) return

        dispatch(logInAction({token: loginRes.data.access_token, user: loginRes.data.user}))

        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            navigate('/')
        }, 1000)
    }

    const handleClose = () => setError(false)
    const handleClosePass = () => setErrorPass(false)
    const handleCloseSuccess = () => setSuccess(false)

    return (
        <>
            <DialogWindow text={'Неверные данные'} status={error} handleClose={handleClose}/>
            <DialogWindow text={'Пароли не совпадают!'} status={errorPass} handleClose={handleClosePass}/>
            <DialogWindow text={'Успех'} status={success} handleClose={handleCloseSuccess}/>
            <Fade>
                <form className='Registration'>
                    <div className='Registration-p'>
                        Регистрация
                    </div>
                    <div className='Registration-form'>
                        <div className='Registration-form-input'>
                            <ThemeProvider theme={theme}>
                                <div className='Registration-form-input-only'>
                                    <TextField fullWidth id="name1" label="Фамилия" variant="filled"
                                               onChange={handleChangeName1} inputProps={inputProps} required/>
                                </div>
                                <div className='Registration-form-input-only'>
                                    <TextField fullWidth id="name2" label="Имя" variant="filled"
                                               onChange={handleChangeName2} inputProps={inputProps} required/>
                                </div>
                                <div className='Registration-form-input-only'>
                                    <TextField fullWidth id="name3" label="Отчество" variant="filled"
                                               onChange={handleChangeName3} inputProps={inputProps} required/>
                                </div>
                                <div className='Registration-form-input-only'>
                                    <TextField fullWidth id="login" label="Никнейм" variant="filled"
                                               onChange={handleChangeUsername} inputProps={inputProps} required/>
                                </div>
                                <div className='Registration-form-input-only'>
                                    <TextField fullWidth id="password" label="Пароль" variant="filled" type="password"
                                               onChange={handleChangePassword} inputProps={inputProps} required/>
                                </div>
                                <div className='Registration-form-input-only'>
                                    <TextField fullWidth id="passwordRepeat" label="Повторите пароль" variant="filled"
                                               type="password" onChange={handleChangePasswordRepeat}
                                               inputProps={inputProps} required/>
                                </div>
                            </ThemeProvider>
                        </div>
                        <div className='Registration-form-submit'>
                            <CustomOrangeButtonWithText text='Подтвердить' onClick={handleSubmit}/>
                        </div>
                    </div>
                </form>
            </Fade>
        </>
    );
};

export default Registration;
