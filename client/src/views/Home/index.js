import React from "react";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Card from "react-bootstrap/cjs/Card";
import CardHeader from "../../components/CardHeader";
import CardBody from "../../components/CardBody";
import AuthenticatedHome from "./AuthenticatedHome";
import Unauthenticated from "./Unauthenticated";

function Home() {
    const [authenticated, setAuthenticated] = React.useState(() => false);
    React.useEffect(() => {
        const {expiresIn} = JSON.parse(localStorage.getItem("@Organic_OS-Token"));
        setAuthenticated(() => expiresIn > Date.now());
    }, []);
    return (
        <Container>
            <Card className="mt-5">
                <CardHeader>
                    <h1 className="text-primary">Organic OS</h1>
                </CardHeader>
                <CardBody>
                    <Row>
                        {authenticated ? <AuthenticatedHome/> : <Unauthenticated/>}
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Home;