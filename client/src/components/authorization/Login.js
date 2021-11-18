import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import axios from 'axios'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import '../../styles/auth.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logInAction} from "./reducers/authReducer";
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
    const dispatch = useDispatch()

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        // TODO:сделать функцию ошибки авторизации
        const res = await axios.post('http://localhost:3001/auth/login', {
            username: username,
            password: password
        }).catch(() => {
            console.log('Ошибка авторизации')
        })
        if (res === undefined) return
        dispatch(logInAction({token: res.data.access_token , user: res.data.user}))
    }

    return (
        <Fade>
            <form className='Login'>
                <div className='Login-p'>
                    Вход
                </div>
                <div className='Login-form'>
                    <div className='Login-form-input'>
                        <ThemeProvider theme={theme}>
                            <div className='Login-form-input-only'>
                                <TextField fullWidth id="login" label="Никнейм" variant="filled" onChange={handleChangeUsername} inputProps={inputProps}/>
                            </div>
                            <div className='Login-form-input-only'>
                                <TextField fullWidth id="password" label="Пароль" variant="filled" type="password" onChange={handleChangePassword} inputProps={inputProps}/>
                            </div>
                        </ThemeProvider>
                    </div>
                    <div className='Login-form-submit' >
                       <Link to={'/'} style={{width: '100%', textDecoration: 'none', color: 'white'}}>
                           <CustomOrangeButtonWithText text='Войти' onClick={handleSubmit}/>
                       </Link>
                    </div>
                    <Link to={'/registration'} className='Login-form-reg' >
                        <CustomOrangeButtonWithText text='Регистрация' />
                    </Link>
                </div>
            </form>
        </Fade>
    );
};

export default Login;