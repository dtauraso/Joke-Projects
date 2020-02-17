import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

const marginSetting = {margin: "25px auto"}
const useStyles = makeStyles({
    button: {
      background:
        "linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px var(--box-shadow)",
      ...marginSetting
    },
    test: {
        //   display: "none",
        background: "white",
        ...marginSetting,
        
        color: "white"
    }
  });

const blue = {
  "--background-start": "#2196F3",
  "--background-end": "#21CBF3",
  "--box-shadow": "rgba(33, 203, 243, .3)"
};

const defaultColor = {
  "--background-start": "#FE6B8B",
  "--background-end": "#FF8E53",
  "--box-shadow": "rgba(255, 105, 135, .3)"
};


const ScreenOfDeathStyled = styled.div`


    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // I seem to need to set a height or flex box just forces them together

    // margins are limited by the width
    margin: 0 auto;
    margin-top: 50px;

    @media only screen and (min-width: 414px) and (max-width: 767px) {
        // width: 50%;
        width: 400px;
        margin: 0 auto;
    }
`


// styled components and material ui
export const DynamicCSSVAriables = (props) => {

    return (
        <div>
            <Button
                className={props.rest.className}
                style={blue}
            >
                {props.rest.message}
            </Button>
        </div>
    )
}


const HOCScreenOfDeath = HigherTestTimer({component: ScreenOfDeath})


const HOCResetJokeButton = HigherTestTimer({component: ResetJokeButton})


// https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon
// so react treats is like a component and not a function that returns a component


const BreakApp = props => {
    
    const classes2 = useStyles()
    console.log(classes2)
    // only can show things on the last triggered refresh
    return (
        // classname that changes after a timer is done
        <div>
            {/* <Header /> */}
            {!props.isCrashing && 
                <StartJokeButton
                    breakApp={props.breakApp}
                    styleName={classes2.button}/>

            }
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
                        wait={4300 * props.messages.length}
                        beforeTimer={"hidden"}
                        afterTimer={classes2.button}
                        componentData={{message: 'reset', resetApp: props.resetApp}}
                        component={ResetJokeButton}
                    />
                }
            </ScreenOfDeathStyled>
            
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
