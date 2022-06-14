// TYPES

//  ==============================================================================
//  Items
//  ==============================================================================
export interface Example {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface User {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface ISummary {
  items: ISummaryItem[];
}

export interface ISummaryItem {
  title: string;
  content: string;
}

//  ==============================================================================
//  State
//  ==============================================================================
export interface ExampleState {
  example: boolean;
}

export interface AuthState {
  loading: boolean;
  currentUser: User;
  user: User;
  isAuthenticated: boolean | undefined;
  error: boolean;
  msg: string;
  token: string;
  newPassword: string;
  confirmNewPassword: string;
  redirect: boolean;
  synched: boolean;
  activated: boolean;
}

export interface RootState {
  exampleState: ExampleState;
  authState: AuthState;
}

// ==============================================================================
// API
// ==============================================================================

// ==============================================================================
// Events
// =============================================================================

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ReactSubmitEvent =
  | React.FormEvent<HTMLFormElement>
  | React.FocusEvent<HTMLInputElement>;
export type ReactClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type ReactClickEventHandler = React.MouseEventHandler<HTMLButtonElement>;
export type ReactDivClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
//  ==============================================================================
//  Props
//  ==============================================================================
