import styled from 'styled-components';

export const BackgroundImage = styled.div`
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  transition: all 0.3s ease;

  h2 {
    font-weight: 800;
    margin: 0 6px 0;
    font-size: 24px;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    margin-top: 4px;
    color: #4a4a4a;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 280px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 20px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

    & ${BackgroundImage} {
      transform: scale(1.1);
    }

    & ${Body} {
      background-color: rgba(255, 255, 255, 0.95);
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 800px) {
    height: 220px;
    margin: 0 5px 15px;
  }
`; 