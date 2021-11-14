import React, {useState} from 'react';

const CustomOrangeButtonWithText = ({text}) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        if (active) return
        setActive(true)
        setTimeout(() => {
            setActive(false)
        }, 500)
    }

    return (
        <div className='custom__button-orange-wrap' onClick={handleClick}>
            {
                active?
                    <div className="custom__button-orange-border custom__button-orange_active">
                        <div className="custom__button-orange-text">
                            {text}
                        </div>
                    </div>
                    :
                    <div className="custom__button-orange-border">
                        <div className="custom__button-orange-text">
                            {text}
                        </div>
                    </div>
            }
        </div>
    );
};

export default CustomOrangeButtonWithText;