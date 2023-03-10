import React from "react";
import styled from "styled-components";

const ContainerUi = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

type containerProps = {
    children?: JSX.Element;
};

export const Container: React.FC<containerProps> = ({ children }) => {
    return <ContainerUi>{children}</ContainerUi>;
};
