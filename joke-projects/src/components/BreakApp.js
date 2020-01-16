import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getCat, startProcess } from '../solutions/cat/catActions';
import Header from './Header';


const GetCatButon = styled.button`

    margin: 100px auto;

`

const BreakApp = props => {
    


    return (
        <div>
            <Header />
            <GetCatButon onClick={() => {
                let i = 0
                // start with this
                while(i < 250000) {
                    i += 1
                    console.log(i)

                }
                console.log('done')
            }}>Press to Break the App</GetCatButon>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        // error : state.error,
        // isFetching: state.isFetching,
        // cat: state.cat

    }
}

export default connect(
    mapStateToProps,
    {}
    // { getCat, startProcess }
)(BreakApp)
