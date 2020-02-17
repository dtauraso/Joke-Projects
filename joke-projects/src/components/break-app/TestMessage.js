import React from 'react'
import styled from 'styled-components'
const MyMessage = styled.p`

    padding-left: 3rem;
    text-align: left;
    @media (min-width: 200px) {
        padding-left: 1rem;
    }
`
const TestMessage = (props) => {

    // console.log(props)
    return(
        <div className={props.rest.className}>
        {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
        <MyMessage>
            {props.rest.message}
        </MyMessage>
    </div>
    )
}

export default TestMessage;