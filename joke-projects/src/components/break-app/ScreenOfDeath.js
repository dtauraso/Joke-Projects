import React from 'react'

import HigherTestTimer from '../hoc/HigherTestTimer';
import styled from 'styled-components'
import TestMessage from './TestMessage'

const HOCTestMessage = HigherTestTimer({component: TestMessage})
// make this the modal view
const ModalView = styled.div`

    // shadow all around
    // look at modal styles I used in celebrities dead or alive
    width: 100%;
    // @media (max-width: 500px) {
    //     margin: 0px;
    // }
    margin: 0 auto;
    color: black;
    background: lightblue;
    border: 1px solid #ccc;
    // transition: 1.1s ease-out;
    // box-shadow: 
    //   -2rem 2rem 2rem rgba(black, 0.2);
    box-shadow: 0 0 18px black;
    border-radius: 10px;

    // filter: blur(0);
    // transform: scale(1);  
    // opacity: 1;
    // visibility: visible;
    // @media (max-width: 500px) {
    //     margin: 0px;
    // }
`

const ScreenOfDeath = (props) => {
    // console.log('death', props)
    const { className, messages } = props.rest
    return (
        <ModalView>
            <div className={className}>
                {messages.map((message, i) => (
                    
                    <HOCTestMessage
                    
                            key={i}
                            wait={(4*i+1) * 1000}
                            beforeTimer={"hidden"}
                            afterTimer={"show"}
                            componentData={{message: message}}
                            component={TestMessage}
                        />
                ))}
            </div>
        </ModalView>
        
    )
}
export default ScreenOfDeath;