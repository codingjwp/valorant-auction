import styled, { css } from 'styled-components';

export interface SelectStyleProps {
  defaultValue?: string;
  sizes?: "sm" | "md" | "lr" | "half" | "full";
  title?: string;
}

const selectSizes = {
  "sm" : css`
    width: 100px;
    height: 40px;
  `,
  "md" : css`
    width: 200px;
    height: 40px;
  `,
  "lr" : css`
    width: 300px;
    height: 40px;
  `,
  "half" : css`
    width: calc(50%);
    height: 40px;
  `,
  "full" : css`
    width: calc(100%);
    height: 40px;
  `,
}

export const SelectBase = styled.select.attrs<SelectStyleProps>((props)=> {
  defaultValue: props.defaultValue
  title: props.title
})<SelectStyleProps>`
  outline: none;
  background-color: #323232;
  border: 1px solid #D41E1E;
  color: white;
  font-size: 1.3rem;
  margin: 10px 0 5px 0;
  ${props => props.sizes && selectSizes[props.sizes || "sm"]};
`;

export const OptionBase = styled.option<SelectStyleProps>`
  font-size: 1.3rem;
  /* ${props => props.sizes && selectSizes[props.sizes || "sm"]}; */
`;