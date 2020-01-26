import React from 'react'
import Button from "@material-ui/core/Button";

// the stylename from props uses this for the background style color
  const blue = {
    "--background-start": "#2196F3",
    "--background-end": "#21CBF3",
    "--box-shadow": "rgba(33, 203, 243, .3)"
  };
  


const StartJokeButton = (props) => {

    // const classes2 = useStyles()
    // console.log('class name', props.styleName)
    const { breakApp } = props
    return (
            <Button
                onClick={() => {breakApp()}}
                // these 2 poperties appear to work together
                style={blue}
                className={props.styleName}
                >
            Press to Break the App
            </Button>
        
    
    )
}
export default StartJokeButton;
