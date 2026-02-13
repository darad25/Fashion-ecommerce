import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
} from '../button/button.styles';


export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: none;

  ${BaseButton},
  ${GoogleSignButton},
  ${InvertedButton} {
    margin-top: 20px;
    width: 100%;
}
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
  text-align: center;
  color: #888;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`; 