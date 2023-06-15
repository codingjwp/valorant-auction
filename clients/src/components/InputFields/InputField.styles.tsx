import { HTMLInputTypeAttribute } from 'react';
import styled, { css } from 'styled-components';

interface InputAttrsProps {
  id?: string;
  title?: string;
  type?: HTMLInputTypeAttribute;
  alt?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  value?: string;
  form?: string;
  src?: string;
  accept?: string;
  hidden?: boolean;
  multiple?: boolean;
}

export interface InputBaseProps extends InputAttrsProps {
  size?: "sm" | "md" | "lr" | "half" | "full";
  decor?: "dark" | "white" | "red" | "blue" | "green" | "gray" | "yellow";
};

const inputColor = {
  "dark": "#323232",
  "white": "#f5f5f5",
  "red": "#D41E1E",
  "blue": "#008CBA",
  "green": "#4CAF50",
  "gray": "#6b6e70",
  "yellow": "#ffbd03",
};
const inputSize = {
  "sm" : css`
    font-size: 1rem;
    padding: 5px;
    width: 6.5rem;
    height: 30px;
  `,
  "md" : css`
    font-size: 1.1rem;
    width: 13rem;
    padding: 5px;
    height: 35px;
  `,
  "lr" : css`
    font-size: 1.15rem;
    padding: 5px;
    width: 18rem;
    height: 40px;
  `,
  "half" : css`
    font-size: 1.15rem;
    width: 50%;
    padding: 5px;
    height: 40px;
  `,
  "full" : css`
    font-size: 1.15rem;
    width: 100%;
    padding: 5px;
    height: 40px;
  `,
};
const focusSize = {
  "sm": css`
    transform: scale(0.7) translateY(-40px) translateX(-27px);
  `,
  "md": css`
    transform: scale(0.7) translateY(-42px) translateX(-20px);
  `,
  "lr": css`
    transform: scale(0.7) translateY(-46px) translateX(-27px);
  `,
  "half": css`
    transform: scale(0.7) translateY(-46px) translateX(-20px);
  `,
  "full": css`
    transform: scale(0.7) translateY(-46px) translateX(-27px);
  `,
}

export const InputBase = styled.input.attrs<InputAttrsProps>(props => (
  {
    id: props.id,
    type: props.type || "text",
    title: props.title,
    alt: props.alt,
    required: props.required || true,
    name: props.name,
    placeholder: props.placeholder || ' ',
    maxLength: props.maxLength,
    minLength: props.minLength,
    pattern: props.pattern,
    value: props.value,
    form: props.form,
    src: props.src,
    accept: props.accept,
    hidden: props.hidden,
    multiple: props.multiple,
  }
  ))<InputBaseProps>`
  outline: none;
  border: 0;
  border-bottom: ${props => props.type !== "file" && '.02rem solid #f5f5f5'};
  background-color: #323232;
  color: white;
  ${props => props.size && inputSize[props.size || "sm"]};
  margin: 10px 0;
  transition: 0.5s ease-in;
  &:focus, &:valid {
    border-bottom: ${props => props.type !== "file" && `.02rem solid inputColor[${props.decor} || "red"]`};
  };
  &:focus + label, &:valid + label {
    transition: 0.5s ease-in;
    ${props => props.size && focusSize[props.size || "sm"]};
    color: ${props => props.decor && inputColor[props.decor || "red"]};
  }
`;

export const InputBox = styled.div`
  position: relative;
`;

interface LabelBase {
  htmlFor?: string;
};

export const LabelBase = styled.label.attrs<LabelBase>(props => ({
  htmlFor: props.htmlFor,
}))`
  position: absolute;
  top: 50%;
  transform: translateY(-10px);
  left: 0.5rem;
  color: #ffffff66;
  transition: 0.5s ease-in;
`;