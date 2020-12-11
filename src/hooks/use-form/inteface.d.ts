interface IField {
  form: any;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
}

interface IForm {
  title?: string;
  onSubmit?: any;
  children?: any;
  handleSubmit: any;
  control?: any;
  initialState?: any;
}

export { IField, IForm };
