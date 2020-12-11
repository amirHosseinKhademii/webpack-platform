import * as React from "react";
import { IField } from "./inteface";

export const TextFiled: React.FC<IField> = React.memo(
  ({ name, placeholder, form }) => {
    return (
      <input
        name={name}
        ref={form.register}
        placeholder={placeholder}
        className=" rounded bg-red-400 p-4"
      />
    );
  }
);
