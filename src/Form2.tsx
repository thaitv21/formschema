import React from "react";
import {FormItemSchema, FormSchema} from "./FormSchema2";
import Select from "react-select";
import {Control, Controller, Path} from 'react-hook-form';

export interface FormProps<T> {
  schema: FormSchema<T>,
  control: Control<T>
}

type Field<T> = keyof T;

export default function Form2<T>(props: FormProps<T>) {
  const {schema, control} = props;
  const fields = Object.keys(schema) as Field<T>[];
  return (
    <form>
      {
        fields.map((key) => {
          const itemSchema = schema[key];
          if (itemSchema.type === 'select') {
            const { options } = itemSchema;
            return <Select options={options} name={key as string} />
          }
          return <input value={control.} />
        })
      }
    </form>
  )
}
