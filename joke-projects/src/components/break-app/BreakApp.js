import React, { useState } from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { breakApp, resetApp } from '../../actions/breakAppActions';
import Header from '../Header';
import HigherTestTimer from '../hoc/HigherTestTimer';
import ScreenOfDeath from './ScreenOfDeath';
import ResetJokeButton from './ResetJokeButton';
import StartJokeButton from './StartJokeButton';
import './BreakAppStyles.css'

const BlueScreen = styled.div`

    width: 100%;
    background: blue;
`

const ScreenOfDeathStyled = styled.div`

    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    // margins are limited by the width
    margin: auto 0 auto 35%
    // border: 1px solid black;
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
            <BlueScreen>
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
                            componentData={{message: 'reset', resetApp: props.resetApp}}
                            component={ResetJokeButton}
                        />
                    }
                </ScreenOfDeathStyled>
            </BlueScreen>
            {!props.isCrashing && 
                <StartJokeButton breakApp={props.breakApp} />

            }
            
            

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
    { breakApp, resetApp }
)(BreakApp)
