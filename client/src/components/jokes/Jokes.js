import React from "react";
import Styled from 'styled-components';

const Wrapper = Styled.form`
    width: 70%;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    margin-top: 1%;
    margin-bottom: 1%;
    word-wrap: break-word;
    
    &:hover {
        font-size: 20px;
        margin-top: 4%;
        margin-bottom: 4%;
    }
`;

const Header = Styled.header`
    width: 40%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin: 0 auto;
    background-color: #313131;
`;

const P = Styled.p`
    word-wrap: break-word;
`;

const Jokes = (props) => {
    return (
        <Wrapper>
            <Header>{props.joke.type}</Header>
            <P>{props.joke.setup}</P>
            <p>{props.joke.punchline}</p>
        </Wrapper>
    )
}

export default Jokes;