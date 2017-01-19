import * as React from 'react';
import * as redux from 'redux'
import { connect } from 'react-redux';

import {
  MainSection,
  model,
  verifyEmail,
  postEmail
} from '../../modules/mailer';

interface MailerProps {
  mailer: model.IState,
  dispatch: redux.Dispatch<void>;
}

class Mailer extends React.Component<MailerProps, void> {
  render() {
    const { mailer, dispatch } = this.props;

    return (
      <div>
        <MainSection
          email={mailer.email}
          contacts={mailer.contacts}
          verifyEmail={(e: boolean) => dispatch(verifyEmail(e))}
          postEmail={(e: model.Email) => dispatch(postEmail(e))}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mailer: state.mailer
});

export default connect(mapStateToProps)(Mailer);

