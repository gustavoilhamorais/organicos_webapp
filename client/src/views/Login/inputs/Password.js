import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Context from '../loginContext';

export default function Password() {
  const { password, setPassword } = React.useContext(Context);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="password-addon">
          <i className="fas fa-key" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        id="login-password-input"
        name="login-password-input"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
    </InputGroup>
  )
}
