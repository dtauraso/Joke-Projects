import React, { useState } from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { breakApp } from '../../actions/breakAppActions';
import Header from '../Header';
import HigherTestTimer from '../hoc/HigherTestTimer';
import TestMessage from './TestMessage';
import ScreenOfDeath from './ScreenOfDeath';
import ResetJokeButton from './ResetJokeButton';

import './BreakAppStyles.css'


const ScreenOfDeathStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const GetCatButon = styled.button`
    margin: 50px auto;
`

// styled components and material ui


const HOCScreenOfDeath = HigherTestTimer({component: ScreenOfDeath})


const HOCResetJokeButton = HigherTestTimer({component: ResetJokeButton})

// https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon
// so react treats is like a component and not a funciton that returns a component

/*
timeline
click button A
A valishes instantly
screen turns blue after x seconds
lines come up y_i seconds later
a button to reset joke to the right of message

*/

const BreakApp = props => {
    

    // only can show things on the last triggered refresh
    return (
        // classname that changes after a timer is done
        // regurlar blank style then blue screen after timer finishes
        // put in a small button on the side letting the user refresh the page
        <div>
            {/* put in some blue screen of death with windows error messages */}
            <Header />
            <ScreenOfDeathStyled>
                {props.isCrashing &&
                    <HOCScreenOfDeath
                    
                        wait={10}
                        beforeTimer={"hidden"}
                        afterTimer={""}
                        componentData={{messages: props.messages}}
                        component={ScreenOfDeath}
                    />
                }
                {props.isCrashing && 
                    <HOCResetJokeButton
                        wait={10000}
                        beforeTimer={"hidden"}
                        afterTimer={""}
                        componentData={{message: 'reset joke'}}
                        component={ResetJokeButton}
                    />
                }
            </ScreenOfDeathStyled>
            
            
            {/* make messages look as if the app actually crashed like 
            chrome aww snap pages */}
            {/* say it's trying to run then have it say it crashed and you can't reload the page
            your only option is to try another joke */}
            {/* <Parent /> */}
            {/* {props.isCrashing &&
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />} */}
            {/* {props.isCrashing &&
                runStuff2(props)} */}
            {/* can I change the display property after this button is clicked? */}
            {/* can this be passed into Child with a delay? */}
            {/* have it set to hide during rerender? */}
            {/* make a component doing the opposite of Child then pass this button in? */}
            <GetCatButon onClick={() => {
                props.breakApp()
                }}>
                Press to Break the App
                </GetCatButon>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.breakAppTree.messages,
        isCrashing: state.breakAppTree.isCrashing
    }
}

export default connect(
    mapStateToProps,
    {breakApp}
)(BreakApp)
