import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Cancel() {
  function cancelSubscription() {
    window.location.assign("/entrar");
  }
  return (
    <Col className="text-left">
      <Button className="btn btn-secondary" onClick={cancelSubscription}>
        <i className="fas fa-times mr-1" />
        Cancelar
      </Button>
    </Col>
  )
}
