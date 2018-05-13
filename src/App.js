import React from 'react';
import {hot} from 'react-hot-loader';
import styled, {injectGlobal, keyframes} from 'styled-components';
import logo from './logo.svg';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${Spin} infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

const Link = styled.a`
  color: #61dafb;
`;

const Code = styled.code`
  font-weight: 600;
  line-height: 1.25;
`;


const App = () => {
    return (
        <Wrapper>
            <Header>
                <Logo src={logo} alt="logo"/>
                <Title>Welcome to React</Title>
            </Header>
            <Intro>
                To get started, edit <Code>src/App.js</Code> and save to reload.
            </Intro>
            <Link
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </Link>
        </Wrapper>
    );
};

export default hot(module)(App);
