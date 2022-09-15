import React from 'react';

const ButtonItem = (props) => {
    return (
        <button
            className={`uppercase border-2 cursor-pointer relative z-10 hover:border-black  hover:bg-black duration-300  py-1 px-6 text-sm hover:text-white text-${props.color}`}
        >
            {props.title}
        </button>
    )
}
export default ButtonItem; 