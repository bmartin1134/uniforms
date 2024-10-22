import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {Checkbox, CheckboxProps, Switch, SwitchProps } from 'antd';
import React, { ReactNode, Ref } from 'react';
import { connectField, FieldProps, filterDOMProps } from 'uniforms';

import wrapField from './wrapField';

export type BoolFieldProps = FieldProps<
  boolean,
  // FIXME: `onClick` uses instance type.
  Omit<CheckboxProps | SwitchProps, 'onClick'>,
  {
    checkbox?: boolean;
    checkedChildren?: ReactNode;
     
    inputRef?: Ref<typeof Checkbox | typeof Switch | any>;
    unCheckedChildren?: ReactNode;
  }
>;

function Bool({
  checkbox = false,
  checkedChildren = <CheckOutlined />,
  disabled,
  inputRef,
  name,
  onChange,
  readOnly,
  unCheckedChildren = <CloseOutlined />,
  value,
  ...props
}: BoolFieldProps) {
  const Component = checkbox ? Checkbox : Switch;
  return wrapField(
    props,
    <Component
      checked={value || false}
      checkedChildren={checkedChildren}
      disabled={disabled}
      name={name}
      onChange={() => (readOnly ? undefined : onChange(!value))}
      ref={inputRef}
      unCheckedChildren={unCheckedChildren}
      {...filterDOMProps(props)}
    />,
  );
}

export default connectField<BoolFieldProps>(Bool, { kind: 'leaf' });
