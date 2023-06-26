import { ChangeEvent } from "react"
import { InputBase, InputBaseProps, LabelBase, InputBox } from "./InputField.styles"

interface InputFieldProps extends InputBaseProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  
  return (
      <InputBox>
        <InputBase
          id={props.id}
          type={props.type}
          alt={props.alt}
          title={props.title}
          name={props.name}
          required={props.required}
          disabled={props.disabled}
          max={props.max}
          min={props.min}
          placeholder=''
          maxLength={props.maxLength}
          minLength={props.minLength}
          pattern={props.pattern}
          value={props.value}
          form={props.form}
          src={props.src}
          size={props.size}
          decor={props.decor}
          accept={props.accept}
          hidden={props.hidden}
          multiple={props.multiple}
          onChange={props.onChange}
        />
        <LabelBase size={props.size} htmlFor={props.id}>{props.placeholder}</LabelBase>
      </InputBox>
  )
}

export default InputField;