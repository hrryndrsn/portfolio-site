import React, { Component } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  /* margin: 24px; */
`

export default class HomePage extends Component {
  render() {
    return (
      <PageContainer>
      <h1>Harry's portfolio</h1>
      <p>projects go here</p>
      </PageContainer>
    )
}}


