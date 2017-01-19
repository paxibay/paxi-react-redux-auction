export type Email = {
  subject: string;
  message: string;
  isValid?: boolean;
  hasPosted?: boolean;
};

export type Contact = {
  addres: string;
};

export type Contacts = Contact[];

export type IState = {
  email: Email;
  contacts: Contacts;
};
