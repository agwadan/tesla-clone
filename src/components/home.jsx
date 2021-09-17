import React from 'react';
import styled from 'styled-components';
import Section from './section';
import { data } from '../data';

const Home = () => {
  return (
    <Container>
      {
        data.map(data => {
          return (
            <>
              <Section
                key={data.id}
                title={data.title}
                description={data.description}
                backgroundImage={data.image}
                leftButtonText={data.leftButtonText}
                rightButtonText={data.rightButtonText}
              />
            </>
          )
        })
      }
    </Container>
  )
}
export default Home;

const Container = styled.div`
  height: 100vh;
`