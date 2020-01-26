import React from 'react'

const TestMessage = (props) => {

    // console.log(props)
    return(
        <div className={props.rest.className}>
        {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
        <p>{props.rest.message}</p>
    </div>
    )
}

export default TestMessage;