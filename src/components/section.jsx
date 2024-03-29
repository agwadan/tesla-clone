import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, leftButtonText, rightButtonText, backgroundImage }) => {
  return (
    <div id={title}>

    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <div>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {
              rightButtonText && <RightButton>Existing Intentory</RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />
      </div>
    </Wrap >
    </div>
  )
}
export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url('/images/${props.bgImage}')`} ;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media(max-width: 768px){
    flex-direction: column
  }
`
const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
`