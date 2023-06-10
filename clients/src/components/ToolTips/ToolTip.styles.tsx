import styled, { css } from "styled-components";

const bgColor = {
  "dark": css`
    background-color: "#323232";
    color: #ffffff;
  `,
  "white": css`
    background-color: "#f5f5f5";
    color: #323232;
  `,
  "red": css`
    background-color: "#D41E1E";
    color: #ffffff;
  `,
  "blue": css`
    background-color: "#008CBA";
    color: #ffffff;
  `,
  "green": css`
    background-color: "#4CAF50";
    color: #ffffff;
  `,
  "gray": css`
    background-color: "#6b6e70";
    color: #ffffff;
  `,
  "yellow": css`
    background-color: "#ffbd03";
    color: #ffffff;
  `,
};

export interface ToolTipProps {
  decor?: 'dark' | 'white' | 'red' | 'yellow' | 'blue' | 'green' | 'gray';
}

export const ToolTipBase = styled.div`
  position: relative;
`;

export const ToolTipContent = styled.div<ToolTipProps>`
  position: absolute;
  ${props => props.decor && bgColor[props.decor || 'dark']}
`;