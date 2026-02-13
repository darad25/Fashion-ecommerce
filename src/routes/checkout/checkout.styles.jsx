import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    width: 65%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 1200px) {
        width: 85%;
    }

    @media screen and (max-width: 800px) {
        width: 95%;
    }
`;

export const CheckoutHeader = styled.div`
      width: 100%;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #e0e0e0;
`;

export const HeaderBlock = styled.div`
  text-transform: uppercase;
  width: 23%;
  font-weight: 800;
  font-size: 14px;
  color: #1a1a1a;
  letter-spacing: 1px;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
      margin-top: 40px;
      margin-left: auto;
      font-size: 32px;
      font-weight: 800;
      color: #1a1a1a;
      padding: 20px 40px;
      background-color: #f9f9f9;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      border: 1px solid #eee;

      &:before {
          content: 'TOTAL: $';
          font-weight: 500;
          font-size: 18px;
          color: #4a4a4a;
          margin-right: 15px;
      }
`;