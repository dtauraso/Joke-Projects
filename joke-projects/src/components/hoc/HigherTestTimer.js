import React from 'react'

const HigherTestTimer = ({ component: Component, ...rest }) => {

    // console.log('rest', rest)

    return class extends React.Component {

        constructor(props) {
            // console.log('props', props)
            super(props)
            this.state = {
                beforeTimer: props.beforeTimer,
                afterTimer: props.afterTimer,

                componentData: {...props.componentData,
                                className: props.beforeTimer}
    
            }
        }
        componentDidMount() {
            var that = this;
            setTimeout(()=> {
                that.show();
            }, that.props.wait);
        }
        show() {
            this.setState({...this.state,
                            componentData: {...this.state.componentData,
                                            className: this.state.afterTimer
                                            }
                        }
                );
        }
        render() {
            // console.log('component', this.state)
            // console.log(Component)
            // works
            return <Component rest={this.state.componentData}/>
        }
    
    }
}

export default HigherTestTimer;