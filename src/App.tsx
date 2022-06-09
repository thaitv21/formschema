import React from 'react';
import './App.css';
import {FormSchema} from "./FormSchema2";
import Form from "./Form2";

interface Lead {
  name: string,
  tags: string[],
}

const schema: FormSchema<Lead> = {
  name: {
    name: 'name',
    label: 'Name',
    type: 'text'
  },
  tags: {
    name: 'tags',
    type: 'select',
    label: 'Tags',
    options: ['tag1', 'tag2']
  }
}

const defaultValues : Lead = {
  name: 'My name',
  tags: ['abc']
}

function App() {
  return (
    <div className="App">
      dsdhasjdhj
      <Form schema={schema} />
    </div>
  );
}

export default App;
