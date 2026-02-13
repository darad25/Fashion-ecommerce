import styled, { css } from 'styled-components';

const subColor = 'black';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -24px;
  left: -2px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
}

export const FormInputLabel = styled.label<FormInputLabelProps>`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 10px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%; 
  border: none;
  border-radius: 10px;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
  letter-spacing: 0.3em;
  }
`;

export const PasswordIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  transition: color 0.2s ease;

  &:hover {
    color: black;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;



