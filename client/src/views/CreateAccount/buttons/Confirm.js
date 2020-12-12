import axios from 'axios';
import React, { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Swal from 'sweetalert2';
import Context from '../accountCreationContext';

export default function Confirm() {
  const { 
    username, 
    email, 
    password, 
    confirmPassword, 
    setIsLoading,
    callRedirectToLogin
  } = useContext(Context);

  async function createUser() {
    try {
      const response = await axios.post(`/user/create`, {
        email: email,
        password: password,
        username: username
      });
      if (response.status === 200) {
        callRedirectToLogin(true);
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


  function handleSubmit() {
    setIsLoading(true);
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        createUser();
      } else {
        Swal.fire({
          title: "Atenção!",
          type: "warning",
          text: "Suas senhas não coincidem. Tente novamente.",
          showCloseButton: true
        });
      }
    } else {
      Swal.fire({
        title: "Atenção!",
        type: "warning",
        text: "Certifique-se de preencher todos os campos para continuar.",
        showCloseButton: true
      });
    }
  }
  return (
    <Col className="text-right">
      <Button color="primary" onClick={handleSubmit}>
        <i className="fas fa-check mr-1" />
        Criar conta
      </Button>
    </Col>
  )
}
