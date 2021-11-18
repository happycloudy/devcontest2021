import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import axios from 'axios'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import '../../styles/auth.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logInAction} from "./reducers/authReducer";
import {Fade} from "react-awesome-reveal";
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
    }
});

const inputProps = {
    style: {
        color: 'white'
    }
};

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        const res = await axios.post('http://localhost:3001/auth/login', {
            username: username,
            password: password
        }).catch(() => {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1000)
        })
        if (res === undefined) return
        dispatch(logInAction({token: res.data.access_token, user: res.data.user}))
        navigate('/')
    }

    const handleClose = () => setError(false)

    return (
        <>
            <DialogWindow text={'Неверный ввод'} status={error} handleClose={handleClose}/>
            <Fade cascade>
                <form className='Login' onSubmit={handleSubmit}>
                    <div className='Login-p'>
                        Вход
                    </div>
                    <div className='Login-form'>
                        <div className='Login-form-input'>
                            <ThemeProvider theme={theme}>
                                <div className='Login-form-input-only'>
                                    <TextField fullWidth id="login" label="Никнейм" variant="filled"
                                               onChange={handleChangeUsername} inputProps={inputProps} required/>
                                </div>
                                <div className='Login-form-input-only'>
                                    <TextField fullWidth id="password" label="Пароль" variant="filled" type="password"
                                               onChange={handleChangePassword} inputProps={inputProps} required/>
                                </div>
                            </ThemeProvider>
                        </div>
                        <div className='Login-form-submit'>
                            <CustomOrangeButtonWithText text='Войти' onClick={handleSubmit}/>
                        </div>
                        <Link to={'/registration'} className='Login-form-reg'>
                            <CustomOrangeButtonWithText text='Регистрация'/>
                        </Link>
                    </div>
                </form>
            </Fade>
        </>
    );
};

export default Login;