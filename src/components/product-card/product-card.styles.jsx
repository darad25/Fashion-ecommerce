import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

    img {
      transform: scale(1.05);
      opacity: 0.9;
    }

    button {
      opacity: 0.9;
      display: flex;
    }
  }

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  button {
    width: 80%;
    position: absolute;
    top: 230px;
    display: none;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    height: 350px;
    
    button {
      top: 200px;
      width: 90%;
    }

    &:hover {
      transform: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      
      img {
        transform: none;
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: white;
  z-index: 2;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  
  &:before {
    content: '$';
  }
`;