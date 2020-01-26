import React from 'react'

import HigherTestTimer from '../hoc/HigherTestTimer';
import TestMessage from './TestMessage'

const HOCTestMessage = HigherTestTimer({component: TestMessage})

const ScreenOfDeath = (props) => {
    // console.log('death', props)
    const { className, messages } = props.rest
    return (
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
    )
}
export default ScreenOfDeath;