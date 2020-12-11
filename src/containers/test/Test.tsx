import * as React from "react";
import { useForm, Form, Filed, useField } from "../../hooks";

const Test = () => {
  const form = useForm({
    onSubmit: (state: any) => console.log(state),
    initialState: { test: "" },
  });

  const filed = useField(form);

  const testField = filed({ name: "test", type: "text" });

  return (
    <div className="flex justify-center py-10 px-10">
      <Form {...form}>
        <Filed {...testField} />
      </Form>
    </div>
  );
};

export default Test;
