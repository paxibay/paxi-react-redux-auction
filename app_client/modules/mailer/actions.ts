import { createAction, Action } from 'redux-actions';

import { Email} from './model';

export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const POST_EMAIL = 'POST_EMAIL';

const verifyEmail = createAction<boolean, boolean >(
  VERIFY_EMAIL,
  (isValid: boolean) => isValid
);

const postEmail = createAction<Email, Email>(
  POST_EMAIL,
  (email: Email) => email
);

export {
  verifyEmail,
  postEmail
}
