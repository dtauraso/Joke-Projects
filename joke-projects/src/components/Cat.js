import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import {fetchCatStart,
    fetchCatSuccess,
    fetchCatFailure,
    fakeAppCrash} from '../reducers/catReducer'
import { getCat, startProcess } from '../actions/catActions';

import TestComponent from './TestComponent'
const CatText2 = styled.p`

    font-family: fantasy
`
const CatHeader = styled(CatText2)``

const CatDiv = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 900px;
    // border: 1px solid #BADA55;
    margin: 0 auto;
`

const CatImage = styled.img`

    // needs to match the width constraint of the div it's contained within
    max-width: 100%;
`

const GetCatButon = styled.button`

    margin: 100px auto;

`
// my version of 'what an action creator' returns

let startOne = 'fakeCrash'
let startTwo = '0'


// main component(not a reducer, a fake state) that can show multiple contexts of the html message from the state control flow
// generalized component?
const Cat = props => {
    // console.log('props', props)

    let one = startOne//props.myCurrentState[0]
    let two = startTwo//props.myCurrentState[1]
    console.log(one, two)
    // only exists inside here
    // my store
    let [myGraphState, setMyGraphState] = useState({
        // cat: null,
        error: '',
        htmlMessage:
            <div>
                testing
                {/* <CatText>Go ahead! Fetch a Cat</CatText> */}
            </div>
        ,
        myCurrentState: ['start', '0'],
        // these keys are not mapped in the props -> store
        myCustomKeys: {
            [startOne]: {
                [startTwo] : {
                    header: <div>
                    <p>test</p>

                    <TestComponent
                        setMyGraphState={() => {
                            // code not a parameter to be already befined
                            // when this is run all the items will be defined
                            setMyGraphState(myGraphState.tree[one]['functions'][two](myGraphState, {}, [one, two]))}
                        }
                        myGraphState={() => {return myGraphState}}
                        setArray={() => {setArray(Object.keys(myGraphState.myCustomKeys[one][two]))}}
                        one={one}
                        two={two}
                        />
                    {/* <GetCatButon onClick={() => {
                        // run the state
                        // where is the data from the state going to go?
                        // setMyGraphState()
                        // works
                        // my 'redux dispatch' call
                        setMyGraphState(myGraphState.tree[one]['functions'][two](myGraphState, {}, [one, two]))

                        setArray(Object.keys(myGraphState.myCustomKeys[one][two]))
        
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
                    }}>Start from inside my store!</GetCatButon> */}
                    </div>
                }
            }
        },
        tree: {
            // -> FETCH_CAT_SUCCESS or FETCH_CAT_FAILURE
            // this node structure was taken from another one of my projects
            'FETCH_CAT_START' :
                    {'next': {'0': {'validate':'0', 'invalid':'0'}},
                    'children': {'0': {'char':'0'}},
                    'functions':{'0':fetchCatStart},
                    'parents' :{'0':{'root':'0'}}},
                    // put a custome prop name
    
            'FETCH_CAT_SUCCESS' :
                    {'next': {'0': {'validate':'0', 'invalid':'0'}},
                    'children': {'0': {'char':'0'}},
                    'functions':{'0':fetchCatSuccess},
                    'parents' :{'0':{'root':'0'}}},
    
            'FETCH_CAT_FAILURE' :
                    {'next': {'0': {'validate':'0', 'invalid':'0'}},
                    'children': {'0': {'char':'0'}},
                    'functions':{'0':fetchCatFailure},
                    'parents' :{'0':{'root':'0'}}},
    
            'fakeCrash' :
                    {'next': {'0': {'validate':'0', 'invalid':'0'}},
                    'children': {'0': {'char':'0'}},
                    'functions':{'0':fakeAppCrash},
                    'parents' :{'0':{'root':'0'}}}
            
            // '@@INIT' :
            // 		{'next': {'0': {'validate':'0', 'invalid':'0'}},
            // 		'children': {'0': {'char':'0'}},
            // 		'functions':{'0':startState},
            //         'parents' :{'0':{'root':'0'}}},
                
                    
            
    
        }
    })
    console.log(myGraphState)
    let [array, setArray] = useState(Object.keys(myGraphState.myCustomKeys[one][two]))//['header']
    console.log('here')

    // setArray(Object.keys(myGraphState.myCustomKeys[one][two]))
    // compute the list of keys that would get run
    // run one piece of code to visit each key and run it
    // console.log()
    // if(Object.keys(props).includes('myCurrentState')) {
    //     one = props.myCurrentState[0]
    //     two = props.myCurrentState[1]

    // }
    // let [flag, setFlag] = useState(false)
    // console.log('states in component', props, one, two)
    // useEffect(() => {
    //     if(Object.keys(props).includes('myCurrentState')) {
    //         one = props.myCurrentState[0]
    //         two = props.myCurrentState[1]
    //         console.log('state in component from useEffect', props, one, two)

    //     }
    // },
    // [flag])
    // const aaa = () => {props.startProcess()}
    // aaa()
    // console.log(props)
    // if(Object.keys(props).includes('myCurrentState')) {
    //     one = props.myCurrentState[0]
    //     two = props.myCurrentState[1]
    //     // console.log(one, two, props.one.two.header)
    // }
    // const headerCode = () => {
    //     console.log('header code being run', one, two, props.myCustomKeys[one][two])
    //     return props.myCustomKeys[one][two].header
    // }
    return (
        <div>
            <CatHeader>Cat Image</CatHeader>
            {/* {!props.cat && !props.isFetching && <CatText>Go ahead! Fetch a Cat</CatText>} */}
            {/* {props.prompt} */}
            {/* {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )} */}
            {/* <CatDiv>
                {props.cat && <CatImage src={props.cat}/>}
            </CatDiv> */}
            {/* supposed to extract the state's custom mini-components here */}
            {/* {props.htmlMessage} */}
            {/* doesnt just rerun this code */}
            {/* {headerCode()} */}
            {/* now need a list of sample codes to run for each time step of the app */}
            {/* state.a */}
            {/* state.b */}
            {/* state.c */}

            {/* run whatever sections exist for the current state being dispatched */}
            {/* adjaciency list style not matrix style */}
            {/* can I use this map call to render any set of components at any time? */}
            {array.map((section, i) => {
                console.log('runing sections')
                
                return (<div key={i}>{myGraphState.myCustomKeys[one][two][section]}</div>)
            }
            )}
            {/* each state would have to have their version of what a, b, and c are */}
            {/* avoiding having to set a section for some states seems to not be possible without reinventing react */}
            {/* {props.myCustomKeys[one][two].header} */}
            {/* {one !== '' && two !== '' && props.one.two.aButtonHere} */}

            {/* <GetCatButon onClick={() => {
                // can't seem to put this inside the store and
                // have it call the reducer with the state returning to the right place
                // for it to work
                // props.startProcess()
//                 store.dispatch({  type: ['fakeCrash', '0'],
//                 endState: ['fakeCrash', '0']
// });             
// return visitRedux(  [stateFirstName, context],
//     [endStateFirstName, endStateContext],
//     state,
//     action,
//     0)
                // If it put this in above the state hooks will not have been defined yet so it will fails
                console.log(myGraphState.tree)
                setMyGraphState(myGraphState.tree[one]['functions'][two](myGraphState, {}, [one, two]))
                // props.props2.function()
                // setFlag(true)
                setArray(Object.keys(myGraphState.myCustomKeys[one][two]))
                console.log('finished running state', myGraphState)

                }}>Start!</GetCatButon> */}

            {/* <GetCatButon onClick={props.getCat}>Get Cat!</GetCatButon> */}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        error : state.error,
        htmlMessage: state.htmlMessage,
        myCurrentState: state.myCurrentState,
        myCustomKeys: state.myCustomKeys
    }
}

export default connect(
    mapStateToProps,
    { getCat, startProcess }
)(Cat)