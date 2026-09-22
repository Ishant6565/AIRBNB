import styled from 'styled-components';

export const ListImage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
  width: 100%;
  max-width: 960px;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  img:first-child {
    grid-column: span 2;
    grid-row: span 2;
    height: 448px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    img,
    img:first-child {
      height: 180px;
    }
  }
`;