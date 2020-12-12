import React from "react";
import {Link} from "react-router-dom";
import Col from 'react-bootstrap/Col';

const CreateAccountLink = () => {
    return (
        <Col>
            <span className="text-muted mr-1">Não possui uma conta?</span>
            <Link id="create-account-link" name="create-account-link" to="/novo-usuario">
                Crie uma.
            </Link>
        </Col>
    );
};

export default CreateAccountLink;