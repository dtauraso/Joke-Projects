import React from "react";
import styled from "styled-components";
import LinkLabels from "../files/LinkLabels";

const NavList = styled.nav`
    background: #282828;
    height: 51px;

`


const NavItems = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;

    // neets to be fixed for certain screen sizes
    max-width: 200px;

    height: 100%;
    margin: 0 auto;

`

const NavAnchor = styled.a`

    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: arial;

    // to match the original portfolio html template
    font-size: 0.95rem;


    // top and bottom, left and right
    padding: 10px 20px;

    &:hover {
        cursor: pointer;
        border-radius: 8px;
        background-color: #383838;
        transition: background-color .2s ease-in-out;
    }
    
`


class Header extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            // returning a styled nav
            <NavList>
                <NavItems>
                    {LinkLabels.map((LinkLabel, i) => (
                        <NavAnchor key={i} href="#">{LinkLabel}</NavAnchor>
                    ))}
                </NavItems>
            </NavList>
        )
    }
}
export default Header;