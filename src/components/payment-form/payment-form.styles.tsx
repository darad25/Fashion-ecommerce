import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
   height: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PaymentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;

    h2 {
        margin: 0;
    }
`;

export const PaymentButton = styled(Button)`
   margin: 0;
   min-width: 150px;
`;