import { ChangeEvent } from "react"
import { InputBase, InputBaseProps, LabelBase, InputBox } from "./InputField.styles"

interface InputFieldProps extends InputBaseProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField(props: InputFieldProps) {
  
  return (
      <InputBox>
        <InputBase
          id={props.id}
          type={props.type}
          alt={props.alt}
          name={props.name}
          required={props.required}
          placeholder=''
          maxlength={props.maxlength}
          minlength={props.minlength}
          pattern={props.pattern}
          value={props.value}
          form={props.form}
          src={props.src}
          size={props.size}
          decor={props.decor}
          onChange={props.onChange}
        />
        <LabelBase size={props.size} htmlFor={props.id}>{props.placeholder}</LabelBase>
      </InputBox>
  )
}