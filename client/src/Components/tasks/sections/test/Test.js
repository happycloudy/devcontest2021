import React, {useState} from 'react';
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";
import Question from "./Question";
import Position from "./Position";

const Test = ({task, setPage}) => {
    const [tests] = useState(() => task.test?task.test: [])
    const [position, setPosition] = useState(0)
    const [boolAnswers, setBoolAnswers] = useState([])
    const [value, setValue] = useState('female');

    const handleNextQuestion = () => {
        setPosition(position+1)
    }

    const handlePosition = (e) => {
        setPosition(parseInt(e.target.value))
    }

    return (
        <section className="test">
            <div className="theme_header-wrap">
                <div className="theme_header-text">
                    {task.name}
                </div>
            </div>

            <div className="test_wrap">
                <div className="test__header">
                    <div className="title-text">
                        Тест
                    </div>
                </div>

                <div className="test__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum in libero nesciunt, nisi nobis tenetur. Aliquid commodi, consequuntur nesciunt nulla recusandae sapiente! Asperiores cumque deserunt ex odio quos velit vero? Animi commodi dignissimos perspiciatis quasi ratione reprehenderit voluptatibus? Aliquam animi aut autem debitis eius, eveniet facilis, fugiat iste libero maiores molestiae mollitia odio omnis quisquam quos sapiente voluptatum. Asperiores assumenda dicta facere harum inventore iusto laborum quisquam quos veniam voluptatibus! Asperiores autem consectetur corporis doloribus ducimus earum eius error esse laudantium maxime minima mollitia provident quis quod totam ullam, unde? Cupiditate dignissimos facilis natus omnis quod ullam, unde. Assumenda.
                </div>

                <Question value={value} setValue={setValue}/>
                <div className="button__next-section">
                    <div className="button__next-wrap" onClick={handleNextQuestion}>
                        <CustomOrangeButtonWithText text={'Ок'}/>
                    </div>
                </div>
                <Position tests={tests} position={position} handlePosition={handlePosition}/>
            </div>
        </section>
    );
};

export default Test;