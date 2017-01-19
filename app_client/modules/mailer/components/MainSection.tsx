import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import MainContent from './MainContent';
import { Email, Contacts} from '../model';

interface MainSectionProps {
  email: Email;
  contacts: Contacts;
  verifyEmail: (e: boolean) => void;
  postEmail: (e: Email) => void;
};
interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  render() {
    return (
      <MainContent
        email={this.props.email}
        contacts={this.props.contacts}
        verifyEmail={this.props.verifyEmail}
        postEmail={this.props.postEmail}
        />
    );
  }
}

export default MainSection;
