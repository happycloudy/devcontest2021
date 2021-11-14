import React, {useState} from 'react';
import TextField from '@mui/material/TextField';


const styles = theme => ({
    textField: {

    },
    input: {
        fullWidth: 'true',
        color: 'white'
    }
});


const Registration = () => {
    const [ClickStyle, setClickStyle] = useState("floating-button-ok");

    const HandleClick = (e) => {
        e.preventDefault();
        setClickStyle("floating-button-ok-clicked")
    }

    const HandleClick2 = () => {
        setClickStyle("floating-button-ok")
    }

    return (
        <form className='Registration'>
            <div className='Registration-p'>
                Регистрация
            </div>
            <div className='Registration-form'>
                <div className='Registration-form-input'>
                    <div className='Registration-form-input-only'>
                        <TextField fullWidth='true' id="name1" label="Фамилия" variant="standard" />
                    </div>
                    <div className='Registration-form-input-only'>
                        <TextField fullWidth='true' id="name2" label="Имя" variant="standard" />
                    </div>
                    <div className='Registration-form-input-only'>
                        <TextField fullWidth='true' id="name3" label="Отчество" variant="standard" />
                    </div>
                    <div className='Registration-form-input-only'>
                        <TextField fullWidth='true' id="login" label="Никнейм" variant="standard" />
                    </div>
                    <div className='Registration-form-input-only'>
                        <TextField fullWidth='true' id="password" label="Пароль" variant="standard" />
                    </div>
                    <div className='Registration-form-input-only'>
                        <TextField fullWidth='true' id="password" label="Повторите пароль" variant="standard" />
                    </div>
                </div>
                    <div className='Registration-form-submit'>
                        <button className={ClickStyle} type='submit' onMouseDown = {HandleClick} onMouseUp = {HandleClick2}>Вход</button>
                    </div>
            </div>
        </form>
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