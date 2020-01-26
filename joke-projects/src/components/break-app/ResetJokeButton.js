import React from 'react'

const ResetJokeButton = (props) => {


    const { className, message, resetApp } = props.rest

    return (
        <div>
            <button className={className} onClick={() => resetApp()}>
                {message}
            </button>
        </div>
    )
}

export default ResetJokeButton;
