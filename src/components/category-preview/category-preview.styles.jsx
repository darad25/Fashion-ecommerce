import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
    padding: 0 10px;
  }  
`;

export const Title = styled(Link)`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
  cursor: pointer;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: -1px;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    color: #4a4a4a;
    transform: translateX(5px);
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
  }

  @media screen and (max-width: 550px) {
      grid-template-columns: 1fr;
  }
`;

// change the start of preview to this if i want
//  display: grid;
// grid-template-columns: repeat(4, 1fr);
// column-gap: 20px;



// display: flex;
//   justify-content: space-between;