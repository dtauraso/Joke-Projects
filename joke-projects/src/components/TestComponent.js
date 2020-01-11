import React from 'react'

const TestComponent = (props) => {

    return (
        <div>
        <button onClick={() => {
            // run the state
            // where is the data from the state going to go?
            // setMyGraphState()
            // works
            props.setMyGraphState()
            props.setArray()
            // my 'redux dispatch' call
            // props.setMyGraphState(props.myGraphState.tree[props.one]['functions'][props.two](props.myGraphState, {}, [props.one, props.two]))

            // props.setArray(Object.keys(props.myGraphState.myCustomKeys[props.one][props.two]))

        //     const startProcess = () => dispatch => {

        //         dispatch({  type: ['fakeCrash', '0'],
        //                     endState: ['fakeCrash', '0']
        //     });
        //     }
        //     // startProcess()
        // // now do I call the reducer inside here?
        // // dispatch({  type: ['fakeCrash', '0'],
        // // endState: ['fakeCrash', '0']});
        // startProcess()
        // setFlag(true)
        }}>Start from inside my store!</button>
        </div>
       
    )
}

export default TestComponent;
