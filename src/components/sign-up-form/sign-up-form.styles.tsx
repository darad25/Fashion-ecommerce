import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.5px;

    @media screen and (max-width: 500px) {
      font-size: 24px;
    }
  }

  span {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.55);
    letter-spacing: 0.2px;

    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  }
`;