import React, { useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Context from '../accountCreationContext';

export default function Username() {
  const { username, setUserName } = useContext(Context);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="username-addon">
          <i className="fas fa-user" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Nome de usuário"
        aria-label="Username"
        aria-describedby="username-addon"
        value={username}
        onChange={({ target: { value } }) => setUserName(value)}
      />
    </InputGroup>
  )
}
