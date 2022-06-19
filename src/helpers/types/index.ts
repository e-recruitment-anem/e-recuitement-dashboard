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

export interface Diplome {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface Experience {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface Education {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface Agence {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [anyProp: string]: any;
}

export interface Offer {
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
  synched: boolean;
  success: boolean;
  msg: string;
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ManageAccountsState {
  loading: boolean;
  currentAdmin: User;
  admin: User;
  error: boolean;
  msg: string;
  admins: User[];
}

export interface ManageSeekerState {
  loading: boolean;
  seeker: User;
  tempSeeker: User;
  seekers: User[];
  diplomes: Diplome[];
  experience: Experience[];
  educations: Education[];
  success: boolean;
  error: boolean;
  updated: boolean;
  msg: string;
}

export interface ManageJobRequestState {
  loading: boolean;
  request: Request;
  requests: Request[];
  tempRequest: Request;
  success: boolean;
  error: boolean;
  updated: boolean;
  msg: string;
}

export interface AgenceState {
  loading: boolean;
  error: boolean;
  success: boolean;
  msg: string;
  agences: Agence[];
  agence: Agence;
}

export interface ManageEmployerState {
  loading: boolean;
  error: boolean;
  success: boolean;
  msg: string;
  employers: User[];
  employer: User;
  offers: Offer[];
  tempEmployer: User;
}

export interface RootState {
  authState: AuthState;
  agenceState: AgenceState;
  manageAccountsState: ManageAccountsState;
  manageSeekerState: ManageSeekerState;
  manageJobRequestsState: ManageJobRequestState;
  manageEmployerState: ManageEmployerState;
}

export interface authData {
  email: string;
  password: string;
}

export interface signupData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
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
