import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 28px 0 20px;
  gap: 16px;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
`;

export const DividerText = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const SignUpLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const SignUpLinkText = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SignUpLinkAnchor = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: #818cf8;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #a5b4fc;
  }
`;