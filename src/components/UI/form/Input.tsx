import * as React from "react";
import { TextFiled } from "./TextField";
import { IField } from "./inteface";

export const Input = React.memo((props: IField) => {
  const { type } = props;
  if (type === "text") return <TextFiled {...props} />;
});
