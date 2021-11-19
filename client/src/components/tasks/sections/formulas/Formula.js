import React, { useState} from 'react';
import {MathJax, MathJaxContext} from "better-react-mathjax";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../../../../loadUser";

const Formula = ({formula}) => {
    const user = useSelector(state => state.auth.user)
    const [liked, setLiked] = useState(()=> {
        return !!user.likedFormulasId.find(id => id === formula._id)
    })
    const dispatch = useDispatch()

    const fetchLiked = async () => {
        if(!liked){
            await axios.patch('http://localhost:3001/users/likeFormula',{
                userId: user._id,
                formulaId: formula._id
            })
            dispatch(loadUser())
        }else{
            await axios.patch('http://localhost:3001/users/unlikeFormula',{
                userId: user._id,
                formulaId: formula._id
            })
            dispatch(loadUser())
        }
    }

    const handleLiked = () => {
        setLiked(prevState => !prevState)
        fetchLiked()
    }

    return (
        <>
            <MathJaxContext>
                <MathJax className={'formula__formula'}>
                    {formula.formula}
                </MathJax>
            </MathJaxContext>
            <div className='formula__heart-wrap'>
                {
                    liked?
                        <img
                            src={'red-heart.png'}
                            className='formula__red-heart'
                            onClick={handleLiked}
                            alt={'red-heart'}
                        />:
                        <img
                            src={'heart.png'}
                            className='formula__heart'
                            onClick={handleLiked}
                            alt={'heart'}
                        />
                }
            </div>
        </>
    );
};

export default Formula;