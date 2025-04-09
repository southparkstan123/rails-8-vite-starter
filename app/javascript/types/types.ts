export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "checkbox"
  | "radio"
  | "file"
  | "range";

export type InputFieldProps = {
  inputId: string;
  className: string;
  inputName: string;
  isRequired: boolean;
  placeholder: string;
  inputValue: string | number | string[] | boolean;
  inputFieldClass: string;
  isDisabled: boolean;
};

export type ButtonProps = {
  isDisabled: boolean;
  buttonType: "submit" | "button";
  textClass: string;
  backgroundClass: string;
  disabledClass: string;
};

export type RangeProps = {
  step: number | undefined;
  min: number | undefined;
  max: number | undefined;
};

export type TextareaFieldProps = InputFieldProps & {
  isReadonly: boolean;
  cols: string;
  rows: string;
};

export type RadioButtonProps = InputFieldProps & {
  checked: boolean;
};

export type CheckboxProps = InputFieldProps & {
  checked: boolean;
};

export type FileProps = InputFieldProps & {
  isMultiple: boolean | undefined;
  accept: string | undefined;
};

export type TableItem = {
  [key: string]: unknown;
};

export type TableField = {
  label: string;
  key: string;
};

export type DropdownItem = [key: string | number, value: string | number];

export type DataProps = {
  data: TableItem[] | undefined;
  fields: TableField[] | undefined;
};

export type TableSlots<T> = {
  pagination: unknown;
  caption: unknown;
  header: { fields: string[]; isLoading: boolean };
  footer: { isLoading: boolean };
  "addition-header": unknown;
  "addition-content": { item: T; isLoading: boolean };
  "search-bar": unknown;
  "no-data": unknown;
} & {
  [key: string]: { item: T; isLoading: boolean };
};

export enum SEX {
  MALE = "male",
  FEMALE = "female",
}

export type Data = {
  id: number;
  name: string;
  sex: "male" | "female";
  dateOfBirth: number;
  joinedAt: number;
};

export type StaffKeys = keyof Data;

export type PaginationProps = {
  page: number;
  pages: number;
};

export type Pagination = {
  currentPage: number;
  pages: number;
  total: number;
  count: number;
  perPage: number;
};

export type ImageFile = {
  id: number | string;
  src: string;
  name: string;
  type: string;
  size: number;
  createdAt: number;
  caption: string;
  // width: number;
  // height: number;
};
