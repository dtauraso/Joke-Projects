import React from 'react'
import styled from 'styled-components'

const StartJokeButtonStyled = styled.button`
    margin: 50px auto;
`

const StartJokeButton = (props) => {


    const { breakApp } = props
    return (
        <div>
            <StartJokeButtonStyled onClick={() => {breakApp()}}>
            Press to Break the App
            </StartJokeButtonStyled>
        </div>
        
    
    )
}
export default StartJokeButton;
