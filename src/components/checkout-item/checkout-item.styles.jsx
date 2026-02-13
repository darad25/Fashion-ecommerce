import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    font-size: 18px;
    align-items: center;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #fafafa;
    }
`;

export const ImageContainer = styled.div`
      width: 23%;
      padding-right: 20px;
  
      img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      }
`;

export const BaseSpan = styled.span`
    width: 23%;
    font-weight: 500;
    color: #1a1a1a;
`;

export const Quantity = styled(BaseSpan)`
    display: flex;
    font-weight: 700;
`;

export const Arrow = styled.div`
  cursor: pointer;
  padding: 0 5px;
  user-select: none;
  &:hover {
      color: #888;
  }
`;

export const Value = styled.span`
   margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    font-size: 24px;
    transition: color 0.2s ease;

    &:hover {
        color: #ff4d4d;
    }
`;  