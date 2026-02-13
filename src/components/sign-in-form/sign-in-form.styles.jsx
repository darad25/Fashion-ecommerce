import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignInTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
`;

export const SignInSubtitle = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.2px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  button {
    flex: 1;
    min-width: unset;
    height: 48px;
    font-size: 13px;
    letter-spacing: 1px;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:first-child {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border: none;
      color: white;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
      }
    }

    &:last-child {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: white;

      &:hover {
        background: rgba(255, 255, 255, 0.14);
        transform: translateY(-2px);
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 12px;
  }
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
  background: rgba(255, 255, 255, 0.12);
`;

export const DividerText = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
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
  color: rgba(255, 255, 255, 0.5);
`;

export const SignUpLinkAnchor = styled.span`
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