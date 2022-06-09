export type BaseSchema<T, K extends keyof T> = {
  name: K,
  label: string,
  required?: boolean,
  disabled?: boolean,
};

export type InputSchema<T, K extends keyof T> = BaseSchema<T, K> & {
  type: 'text' | 'tel' | 'number' | 'text-area',
  defaultValue?: string,
  placeholder?: string,
};
//
// export type SingleSelect<T, K extends keyof T> = {
//   options: Array<T[K]>
// }
//
// export type MultiSelect<T, K extends keyof T, V> = {
//   options: Array<V>
// }

export type SelectSchema<T, K extends keyof T> = BaseSchema<T, K> & {
  type: 'select',
  options: T[K] extends Array<infer V> ? Array<V> : Array<T[K]>
}

export type FormItemSchema<T, K extends keyof T> = InputSchema<T, K> | SelectSchema<T, K>

export type FormSchema<T> = {[K in keyof T]: FormItemSchema<T, K>}
