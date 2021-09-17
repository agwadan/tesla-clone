import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <div>
      <Container>
        <a><img src='../assets/images/logo.svg' alt='' /></a>
        <Menu>
          {
            cars && cars.map((car, index) => (
              <a key={index} href='/'>{car}</a>
            ))
          }
        </Menu>
        <RightMenu>
          <a href='/'>Shop</a>
          <a href='/'>Tesla Account</a>
          <CustomMenu onClick={() => setBurgerOpen(true)} />
        </RightMenu>
        <BurgerNav show={burgerOpen}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerOpen(false)} />
          </CloseWrapper>
          {
            cars && cars.map((car, index) => (
              <li><a key={index} href='/'>{car}</a></li>
            ))
          }
          <li><a href='/'>Existing Inventory</a></li>
          <li><a href='/'>Used Inventory</a></li>
          <li><a href='/'>Trade-In</a></li>
          <li><a href='/'>Cyber Truck</a></li>
          <li><a href='/'>Roadster</a></li>
        </BurgerNav>
      </Container>
    </div>
  )
}
export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: start; 
  transition: .3s;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600;
      color: grey;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`