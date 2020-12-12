import React, { useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Context from '../accountCreationContext';

export default function ConfirmPassword() {
  const { password, confirmPassword, setConfirmPassword } = useContext(Context);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="confirm-password-addon">
          <i className={
            password === confirmPassword
              && password !== "" && confirmPassword !== ""
              ? "fas fa-lock" : "fas fa-unlock"
          }
          />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        id="confirm-password"
        type="password"
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChange={({ target: { value } }) => setConfirmPassword(value)}
      />
    </InputGroup>
  )
}
