import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    width: 100%;
    border-radius: 0.25rem;
    color: white;
    background: ${(themeProps) => themeProps.theme.colors.primaryColor};
    outline: none;
    border: 1px solid ${(themeProps) => themeProps.theme.colors.primaryColor};
    padding: 8px 0;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background: ${(themeProps) => themeProps.theme.colors.primaryColorHover};
    }

    &:disabled {
        color: #666;
        background: lightgrey;
    }
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...props }: ButtonProps) => {
    return <ButtonComponent {...props}>{text}</ButtonComponent>;
};
