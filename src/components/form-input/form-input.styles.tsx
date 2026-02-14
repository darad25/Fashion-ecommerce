import styled, { css } from 'styled-components';

const subColor = 'rgba(255, 255, 255, 0.5)';
const mainColor = '#ffffff';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 16px;
  top: 14px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-size: 16px;
  padding: 14px 16px;
  display: block;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 24px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const PasswordIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 14px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;



