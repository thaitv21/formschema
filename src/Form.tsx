import {Controller, DefaultValues, FieldPath, useForm} from "react-hook-form";
import React, {useCallback, useEffect} from "react";
import CreatableSelect from "react-select/creatable";
import {FormSchema} from "./FormSchema";

export interface FormProps<T> {
  schema: FormSchema<T>,
  defaultValues: DefaultValues<T>,
}

function renderItem<T, K extends FieldPath<T>>(schema: FormSchema<T>, key: K) {
  const itemSchema = schema[key];
  if (itemSchema.type === 'select') {
    return (
      <Controller
        name={key}
        render={({field}) => (
          <CreatableSelect {...field} />
        )}
      />
    )
  }
  return (
    <Controller
      name={key}
      render={({field}) => (
        <input {...field} />
      )}
    />
  )
}

export default function Form<T>(props: FormProps<T>) {
  const {schema, defaultValues} = props;
  const {control, handleSubmit, reset} = useForm({defaultValues})
  const onSubmit = useCallback(() => {
  }, []);
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  const keys = Object.keys(schema) as FieldPath<T>[];
  return (
    <form>
      {
        keys.map((key) => {
          return renderItem(schema, key)
        })
      }
    </form>
  )
}
