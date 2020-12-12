import React from 'react';
import ReactLoading from "react-loading";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

function Loading({children, isLoading}) {
    return isLoading ? (
        <Row>
            <Col></Col>
            <Col>
                <ReactLoading width={90} type="bars" color="primary"/>
            </Col>
            <Col></Col>
        </Row>
    ) : children;
}

export default Loading;