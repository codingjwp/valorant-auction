import { ChangeEvent, forwardRef } from 'react';
import { SelectBase, OptionBase, SelectStyleProps } from './Select.styles'


interface SelectProps extends SelectStyleProps {
  seletId: string | null;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  optionlist?: {
      idx: string,
      value: string,
      label: string,
  }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return (
    <SelectBase defaultValue={props.seletId} ref={ref} title={props.title} sizes={props.sizes} onChange={props.onChange}>
      {props.optionlist?.map((list) => {
        return <OptionBase key={list.idx} value={list.value}>{list.label}</OptionBase>
      })}
    </SelectBase>
  );
});

export default Select;