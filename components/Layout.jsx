import React from 'react';
import Head from 'next/head';
import { Main, Footer, Anchor } from 'grommet';
import styled from 'styled-components'
import { Github } from 'grommet-icons';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height:100vh;
`

const StyledFooter = styled(Footer)`
  background: hsl(0, 0%, 10%);
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 15px;
  display: flex;
  justify-content: center;
`

const StyledHeader = styled.div`
  font-family: "Patua One";
  font-size: 26px;
  margin-bottom: 50px;
  color: hsl(42, 78%, 95%);

  span {
    color: hsl(42, 78%, 60%);
  }
`

export default function Layout({ children }) {
  return <Wrapper>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Patua+One&display=swap" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Main pad="large">
      <StyledHeader>fretboard<span>.rocks</span></StyledHeader>
      {children}
    </Main>

    <StyledFooter pad="medium">
      <Anchor
        color="hsl(42, 40%, 70%)"
        label="Github"
        target="_blank"
        icon={<Github color="hsl(42, 40%, 70%)" />}
        href="https://github.com/olivierbeaulieu/fretboard-app"
      />
    </StyledFooter>
  </Wrapper>
}