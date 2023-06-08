import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

interface InputAttrsProps {
  id?: string;
  type?: HTMLInputTypeAttribute;
  alt?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  value?: string;
  form?: string;
  src?: string;
}

export interface InputBaseProps extends InputAttrsProps {
  size?: "sm" | "md" | "lr" | "half" | "full";
  decor?: "dark" | "white" | "red" | "blue" | "green" | "gray" | "yellow";
}

const inputSize = {
  "sm" : css`
    font-size: 1rem;
    margin: 5px 0 5px;
    width: 100px;
    height: 40px;
  `,
  "md" : css`
    font-size: 1.1rem;
    margin: 5px 0 5px;
    width: 200px;
    height: 45px;
  `,
  "lr" : css`
    font-size: 1.15rem;
    margin: 5px 0 5px;
    width: 300px;
    height: 50px;
  `,
  "half" : css`
    margin: 5px 0 5px;
    font-size: 1.15rem;
    width: calc(50% - 10px);
    height: 50px;
  `,
  "full" : css`
    margin: 10px 0 5px;
    font-size: 1.15rem;
    width: calc(100% - 10px);
    height: 50px;
  `,
}

const inputColor = {
"dark": "#323232",
"white": "#f5f5f5",
"red": "#D41E1E",
"blue": "#008CBA",
"green": "#4CAF50",
"gray": "#6b6e70",
"yellow": "#ffbd03",
}

export const InputBase = styled.input.attrs<InputAttrsProps>(props => (
  {
    id: props.id,
    type: props.type || "text",
    alt: props.alt,
    required: props.required || true,
    name: props.name,
    placeholder: props.placeholder || ' ',
    maxlength: props.maxlength,
    minlength: props.minlength,
    pattern: props.pattern,
    value: props.value,
    form: props.form,
    src: props.src,
  }
  ))<InputBaseProps>`
  outline: none;
  border-radius: 5px;
  ${props => props.size && inputSize[props.size]};

  &:focus, &:valid {
    border: 3px solid ${props => props.decor  && inputColor[props.decor || "red"]};  
  }
  &:not(:placeholder-shown) ~ label,
  &:focus ~ label,
  &:valid ~ label {
  opacity: 1;
  color: ${props => props.decor  && inputColor[props.decor || "red"]};
  transform: translateX(10px) translateY(-5px);
  font-size: 1.2rem;
  padding: 0 10px;
  background-color: #323232;
  border-radius: 5px;
  letter-spacing: 0.2rem;
  }
`;

export const InputBox = styled.div`
  position: relative;
`;

interface LabelBase {
  htmlFor?: string;
}

export const LabelBase = styled.label.attrs<LabelBase>(props => ({
  htmlFor: props.htmlFor,
}))`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px 0 0 5px;
  padding: 20px 10px 10px 10px;
  pointer-events: none;
  opacity: 0.25;
  text-transform: uppercase;
  transition: 0.5s;
`;