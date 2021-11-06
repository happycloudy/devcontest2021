import React, {useState} from 'react';
import {TextField} from "@mui/material";
import axios from "axios";

const Registration = () => {
    const [username, setUsername] = useState('')

    const handleUsername = async (e) => {
        await setUsername(e.target.value)
    }

    const handleForm = async e => {
        // рега
        // const res = await axios.post('http://localhost:3000/users', {
        //     name1: 'name1',
        //     name2: 'name2',
        //     name3: 'name3',
        //     username: 'username',
        //     // password: 'passwod'
        // }).catch(() => {
        //     console.log('error')
        // })


        // // логин
        // const res = await axios.post('http://localhost:3000/auth/login', {
        //     username: 'aboba123',
        //     password: 'lepsi'
        // })
        //
        // console.log(res.data)
        //
        // localStorage.setItem('jwtToken', res.data.access_token)


        // // запросы после логина
        // const res = await axios.get('http://localhost:3000/themes')
        //
        // console.log(res.data)
    }


    return (
        <form className='Registration'>
            {
                username === "Абобус" ?
                    <>
                        <div className='Registration-p'>
                            Регистрация
                        </div>
                        <div className='Registration-form'>
                            <TextField id="standard-basic" label="username" variant="standard" onChange={handleUsername}
                                       value={username}/>
                        </div>

                        <input type='submit' value='Зарегистрироваться'/>
                    </> :
                    <div>
                        Ты абобус
                    </div>

            }

        </form>
    );
};

export default Registration;