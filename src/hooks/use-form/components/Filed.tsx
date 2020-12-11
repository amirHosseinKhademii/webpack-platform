import * as React from "react";
import { TextFiled } from ".";
import { IField } from "../inteface";

export const Filed = React.memo((props: IField) => {
  const { type } = props;
  if (type === "text") return <TextFiled {...props} />;
});
