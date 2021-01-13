import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    @media (max-width: 400px) {
      margin-left: -90px;
    }
`;