import * as React from 'react';
import { Button, Label, Tabs, Tab } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Radio } from 'react-bootstrap';

import { Email, Contacts } from '../model';

interface MainContentProps {
  email: Email;
  contacts: Contacts;
  verifyEmail: (e: boolean) => void;
  postEmail: (e: Email) => void;
};

interface MainContentState {
  mailerState?: Email;
  contacts?: Contacts;
  subject?: string;
  message?: string;
  canSubmit?: string;
};

class MainContent extends React.Component<MainContentProps, MainContentState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mailerState: { subject: '', message: ''},
      contacts: [],
      message: '',
      subject: '',
      canSubmit: 'disabled'
    };
  }

  componentDidMount() {
    this.setState({
      mailerState: this.props.email,
      contacts: this.props.contacts
    });
  }

  verifySubject(e) {

    const subjectValue = e.target.value.trim();
    this.setState({
      subject: e.target.value.trim()
    });

    if (subjectValue !== '' && this.state.message !== '') {
      this.props.verifyEmail((true));
    }
    else {
      this.props.verifyEmail((false));
    }
  }

  verifyMessage(e) {
    const messageValue = e.target.value.trim();
    this.setState({
      message: messageValue
    });

    if (this.state.subject !== '' && messageValue !== '') {
      this.props.verifyEmail((true));
    }
    else {
      this.props.verifyEmail((false));
    }
  }

  submit() {    let email = {      subject: this.state.subject,
      message: this.state.message,
      isValid: true,
      hasPosted: true
    }    this.props.postEmail(email);    this.setState({
      subject: '',
      message: ''
    });    this.props.verifyEmail((false));  }

  renderContent() {
    const { email, contacts } = this.props;

    const corrAddr = contacts[0].addres;

    let showSummary = email.hasPosted;
    let enabled = email.isValid ? "" : "disabled";
    let btnStatus = `btn btn-default ${enabled}`;
    
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6">
           <div className="form-group">
            <label htmlFor="name" className="col-xs-12 control-label">Current Contact</label>
            <div className="col-xs-12">
              <FormGroup>
                <Radio inline name="gender" defaultValue="true">
                  <input className="btn btn-large btn-primary" type="button" value={contacts[0].addres}  />
                </Radio>
                {' '}
                <Radio inline name="gender">
                  <input className="btn btn-large btn-success" type="submit" value={contacts[1].addres} />
                </Radio>
              </FormGroup>
            </div>
          </div>
          <br/><br/><br/>
          <div className="form-group">
            <label htmlFor="review" className="col-sm-12 control-label">Subject</label>
            <div className="col-sm-12">
              <textarea id="review" name="review" className="form-control"
                rows={5} required={true} value={this.state.subject}
                placeholder="Add a subject" 
                onChange={this.verifySubject.bind(this)}
                >
              </textarea>
            </div>
          </div>
        </div>
        
        <div className="col-xs-12 col-sm-6">
          <div className="form-group">
            <label htmlFor="review" className="col-sm-12 control-label">Message</label>
            <div className="col-sm-12">
              <textarea id="review" name="review" rows={5} required={true} value={this.state.message}
                className="form-control"
                placeholder="Leave your message here" 
                onChange={this.verifyMessage.bind(this)}
                ></textarea>
            </div>
          </div>
          <div>&nbsp;</div>
          <div className="form-group">
            <label htmlFor="review" className="col-xs-6 control-label">
              <input type="checkbox" name="checkbox" value="value" /> Save a copy
            </label>
            <div className="col-xs-6">
              <button className={btnStatus} type="submit" onClick={this.submit.bind(this)} >Send a Email</button>
            </div><hr/>

            <label className="col-xs-12"><hr />
              {showSummary ? "Email has been sent:" : ""}
            </label>
            <label className="col-xs-12">
              {showSummary ? "Subject: " + (email.subject) : ""}
            </label>
            <label className="col-xs-12">
              {showSummary ? "Message: " + (email.message) : ""}
            </label>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

export default MainContent;


