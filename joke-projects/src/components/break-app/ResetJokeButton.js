import React from 'react'
import Button from "@material-ui/core/Button";

const blue = {
    "--background-start": "#2196F3",
    "--background-end": "#21CBF3",
    "--box-shadow": "rgba(33, 203, 243, .3)"
  };
  
const ResetJokeButton = (props) => {


    const { className, message, resetApp } = props.rest
    // console.log(className)
    return (
        <div>
            {
                // maybe refactor this to not rely on a class name
                !(className === 'hidden') ? 

                <Button

                    // these 2 poperties appear to work together
                    style={blue}
                    className={className}
                    
                    onClick={() => resetApp()}>
                {message}
                </Button>

                :
                <div></div>
            }
            
        </div>
    )
}

export default ResetJokeButton;
