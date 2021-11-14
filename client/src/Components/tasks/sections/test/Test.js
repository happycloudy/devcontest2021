import React, {useState} from 'react';

const Test = ({task, setPage}) => {
    const [tests] = useState(() => task.test)

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

                <div className="test">

                </div>
            </div>
        </section>
    );
};

export default Test;