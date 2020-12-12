import React from 'react';
import {Provider} from './loginContext';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// Custom Components
import CardHeader from '../../components/CardHeader';
import CardBody from '../../components/CardBody';
import CardFooter from '../../components/CardFooter';
import './index.css';
import Email from './inputs/Email';
import Password from './inputs/Password';
import SaveLoginData from './inputs/SaveLoginData';
import ConfirmButton from './ConfirmButton';
import OrganicLogo from './OrganicLogo';
import CreateAccountLink from "./CreateAccountLink";

export default function Login() {
    const [email, setEmail] = React.useState(() => '');
    const [password, setPassword] = React.useState(() => '');
    const [isLoading, setIsLoading] = React.useState(() => false);
    const [saveLoginData, setSaveLoginData] = React.useState(() => false);
    return (
        <Provider value={{
            email,
            setEmail,
            password,
            setPassword,
            saveLoginData,
            setSaveLoginData,
            isLoading,
            setIsLoading,
        }}>
            <Container fluid>
                <Row className="justify-content-center mt-3">
                    <OrganicLogo/>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs="12" sm="12" md="6" lg="4" xl="4">
                        <Card>
                            <CardHeader>
                                Entrar
                            </CardHeader>
                            <CardBody>
                                <Email/>
                                <Password/>
                                <SaveLoginData/>
                                <CreateAccountLink/>
                            </CardBody>
                            <CardFooter>
                                <ConfirmButton/>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Provider>
    )
}
