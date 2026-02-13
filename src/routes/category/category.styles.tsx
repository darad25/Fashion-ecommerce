import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 15px;
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 50px;
    text-align: center;
    color: #1a1a1a;
    letter-spacing: -1px;
    text-transform: uppercase;
`;