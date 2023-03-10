import React from "react";
import styled from "styled-components";

const SpacedHeaderH1 = styled.h1`
    font-size: 0.8rem;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 1rem;
`;

type spacedHeaderProps = {
    text: string;
};

export const SpacedHeader: React.FC<spacedHeaderProps> = ({ text }) => {
    return <SpacedHeaderH1>{text}</SpacedHeaderH1>;
};
