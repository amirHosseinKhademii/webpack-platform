import * as React from "react";
import { useForm, useInput } from "Hooks";
import { Form, Input } from "Components";

const Test = () => {
  const form = useForm({
    onSubmit: (state: any) => console.log(state),
    initialState: { test: "" },
  });

  const input = useInput(form);

  const test = input({ name: "test", type: "text" });

  return (
    <div className="flex justify-center py-10 px-10">
      <Form {...form}>
        <Input {...test} />
      </Form>
    </div>
  );
};

export default Test;
