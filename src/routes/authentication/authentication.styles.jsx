import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 100%);
  background-size: 300% 300%;
  animation: ${gradientShift} 12s ease infinite;
  padding: 40px 20px;
  margin: -20px -40px;

  @media screen and (max-width: 800px) {
    margin: 0;
    padding: 24px 16px;
    height: auto;
    min-height: calc(100vh - 60px);
  }
`;

export const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 48px 40px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.6s ease-out;

  @media screen and (max-width: 500px) {
    padding: 32px 20px;
    border-radius: 18px;
    margin: 0;
  }
`;