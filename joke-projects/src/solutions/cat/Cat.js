import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getCat } from './catActions';
import Header from '../../components/Header';

const CatText = styled.p`

    font-family: fantasy
`
const CatHeader = styled(CatText)``

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

const Cat = props => {
    

    // console.log("my props", props)
    return (
        <div>
            <Header />
            <CatHeader>Cat Image</CatHeader>
            {!props.cat && !props.isFetching && <CatText>Go ahead! Fetch a Cat</CatText>}

            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <CatDiv>
                {props.cat && <CatImage src={props.cat}/>}
            </CatDiv>
            <GetCatButon onClick={props.getCat}>Get Cat!</GetCatButon>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        error : state.catTree.error,
        isFetching: state.catTree.isFetching,
        cat: state.catTree.cat

    }
}

export default connect(
    mapStateToProps,
    { getCat }
)(Cat)
