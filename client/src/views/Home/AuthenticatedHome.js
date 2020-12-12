import React, {useEffect, useState} from 'react';
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import axios from "axios";
import Loading from "../../components/Loading";

function AuthenticatedHome() {
    const [state, setState] = useState({
        isLoading: false,
        data: ""
    });

    useEffect(() => {
        setState(previous => ({...previous, isLoading: true}));
        const {token} = JSON.parse(localStorage.getItem("@Organic_OS-Token"));
        axios.get("/pld", {
            headers: {"x-access-token": token}
        }).then(({data: {data}}) => {
            setState(previous => {
                return {
                    data,
                    isLoading: false
                }
            });
        }).catch(error => console.error(error))
    }, []);

    return (
        <Col>
            <Loading isLoading={state.isLoading}>
                <Card>
                    <table dangerouslySetInnerHTML={{__html: state.data}}/>
                </Card>
            </Loading>
        </Col>
    );
}

export default AuthenticatedHome;
