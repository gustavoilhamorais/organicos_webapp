import React, { Component } from 'react';
import { Provider } from './accountCreationContext';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Custom Components
import CardHeader from '../../components/CardHeader';
import CardBody from '../../components/CardBody';
import CardFooter from '../../components/CardFooter';
import CancelBtn from './buttons/Cancel';
import ConfirmBtn from './buttons/Confirm';
import RedirectToLogin from './RedirectToLogin';
import Username from './inputs/Username';
import Email from './inputs/Email';
import Password from './inputs/Password';
import ConfirmPassword from './inputs/ConfirmPassword';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      redirectToLoding: false
    };
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        setIsLoading: (boolean) => this.setState({ isLoading: boolean }),
        callRedirectToLogin: (boolean) => this.setState({ redirectToLoding: boolean }),
        setUserName: string => this.setState({ username: string }),
        setEmail: string => this.setState({ email: string }),
        setPassword: string => this.setState({ password: string }),
        setConfirmPassword: string => this.setState({ confirmPassword: string }),
      }}>
        <Container fluid>
          <RedirectToLogin />
          <Row className="justify-content-center mt-5">
            <Col xs="12" sm="12" md="6" lg="4" xl="4">
              <Card>
                <CardHeader>
                  Cadastro
                </CardHeader>
                <CardBody>
                  <Username />
                  <Email />
                  <Password />
                  <ConfirmPassword />
                </CardBody>
                <CardFooter>
                  <Row>
                    <CancelBtn />
                    <ConfirmBtn />
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default CreateAccount;
