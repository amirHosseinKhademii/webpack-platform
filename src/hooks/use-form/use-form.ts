import { useForm as useFormHook } from "react-hook-form";

const useForm = (props: {
  title?: string;
  onSubmit: any;
  initialState?: any;
}) => {
  const { title, onSubmit, initialState } = props;

  const { handleSubmit, register, control, formState } = useFormHook({
    criteriaMode: "all",
    defaultValues: initialState,
  });

  const { isSubmitting } = formState;

  return {
    title,
    onSubmit,
    handleSubmit,
    register,
    control,
    isSubmitting,
  };
};

export { useForm };
