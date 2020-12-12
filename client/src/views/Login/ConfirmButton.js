import React from 'react';
import axios from 'axios';
import Context from './loginContext';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default function ConfirmButton() {
  const { email, password, setIsLoading } = React.useContext(Context);

  async function handleSubmit() {
    try {
      const url = `/user/login`;
      if (email && password) {
        const response = await axios.post(url, { email, password });
        if (response.status === 200 && response.data.data.token) {
          const token = JSON.stringify({ ...response.data.data });
          localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN, token);
        }
      } else {
        Swal.fire({
          title: "Atenção!",
          text: "Certifique-se de preencher TODOS os campos!",
          type: "warning",
          showCloseButton: true
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Erro!",
        text: error.response?.data?.message || error?.message || error,
        type: "error",
        showCloseButton: true
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Col className="text-right">
      <Button
        color="primary"
        id="login-confirm-btn"
        name="login-confirm-btn"
        onClick={handleSubmit}
      >
        <i className="fas fa-check mr-1" />
        Confirmar
      </Button>
    </Col>
  )
}
