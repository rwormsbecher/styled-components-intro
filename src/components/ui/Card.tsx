import React from "react";
import styled from "styled-components";

const CardContainerUi = styled.div`
    display: flex;
    width: 600px;
    height: 450px;
    background-color: white;
    border-radius: 1.5em;
`;

const CardSide = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`;

const CardLeft = styled(CardSide)`
    border-radius: 1.5em 0 0 1.5em;

    img {
        border-radius: 1.5em 0 0 1.5em;
        width: 100%;
    }
`;

const CardRight = styled(CardSide)`
    border-radius: 1.5em 0 0 1.5em;
    padding: 1.5em;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 1.5em 1.5em 0;

    h2 {
        font-family: "Merriweather", serif;
        font-size: 1.75rem;
        font-weight: bold;
        color: ${(themeProps) => themeProps.theme.colors.headerColor};
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }

    .price-container {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;

        h3 {
            font-size: 24px;
            color: ${(themeProps) => themeProps.theme.colors.primaryColor};
            margin-right: 1.5rem;
        }

        span {
            text-decoration: line-through;
        }
    }
`;

type childrenOnlyProps = {
    children?: JSX.Element;
};

export const CardContainer: React.FC<childrenOnlyProps> = ({ children }) => {
    return <CardContainerUi>{children}</CardContainerUi>;
};

export const CardLeftSide: React.FC<childrenOnlyProps> = ({ children }) => {
    return <CardLeft>{children}</CardLeft>;
};

export const CardRightSide: React.FC<childrenOnlyProps> = ({ children }) => {
    return <CardRight>{children}</CardRight>;
};
