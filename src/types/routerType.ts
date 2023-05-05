
export interface RouterItems {
  path: string;
  label?: string;
  element?: JSX.Element;
  errorElement?: JSX.Element;
  children?: RouterItems[];
}