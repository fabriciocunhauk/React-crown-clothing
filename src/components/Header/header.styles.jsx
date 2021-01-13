import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerStyles = css`
    padding: 10px 15px; 
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media (max-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media (max-width: 400px) {
        margin-left: -50px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 400px) {
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;

export const OptionLink = styled(Link)`
    ${OptionsContainerStyles}
`;

// export const OptionDiv = styled.div`
//     ${OptionsContainerStyles}
// `;