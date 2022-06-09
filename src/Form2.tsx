import React from "react";
import {FormItemSchema, FormSchema} from "./FormSchema2";

export interface FormProps<T> {
  schema: FormSchema<T>
}

type Field<T> = keyof T;

export default function Form2<T>(props: FormProps<T>) {
  const {schema} = props;
  const fields = Object.keys(schema) as Field<T>[];
  return (
    <form>
      {
        Object.keys(schema).map((key) => (
          <input name={key} />
        ))
      }
    </form>
  )
}
