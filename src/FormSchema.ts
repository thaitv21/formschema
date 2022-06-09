import {FieldPath, PathValue} from "react-hook-form";

type SelectOptionValue<T, K extends FieldPath<T>> = {
  label: string,
  value: PathValue<T, K> extends ReadonlyArray<infer V> ? V : PathValue<T, K>
};

type SelectOption<T, K extends FieldPath<T>> = SelectOptionValue<T, K>[] |
  (() => SelectOptionValue<T, K>[]);

export type BaseSchema<T, K extends FieldPath<T>> = {
  name: K,
  label: string,
  required?: boolean,
  disabled?: boolean,
};

export type InputSchema = {
  type: 'text' | 'tel' | 'number' | 'text-area',
  defaultValue?: string,
  placeholder?: string,
};

export type SelectSchema<T, K extends FieldPath<T>> = {
  type: 'select' | 'creatable-select',
  options: SelectOption<T, K>
};

export type FormItemSchema<T, K extends FieldPath<T>> = BaseSchema<T, K> &
  (InputSchema | SelectSchema<T, K>);

export type FormSchema<T> = { [K in FieldPath<T>]: FormItemSchema<T, K> };
