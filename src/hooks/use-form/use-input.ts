import { useMemo } from "react";

const useInput = (form: any) => (props: {
  name: string;
  type: string;
  rules?: any;
}) => {
  const { name, type, rules } = props;

  return {
    name,
    type,
    form,
    rules: useMemo(() => rules, []),
  };
};

export { useInput };
