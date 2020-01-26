import React from 'react'

const ResetJokeButton = (props) => {
    // console.log("reset", props)
    const { className, message } = props.rest
    return (
        <div>
            <button className={className}>
                {message}
            </button>
        </div>
    )
}

export default ResetJokeButton;
