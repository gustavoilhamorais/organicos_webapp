import React, { useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Context from '../accountCreationContext';

export default function Email() {
  const { email, setEmail } = useContext(Context);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="email-addon">
          <i className="fas fa-envelope" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="email"
        placeholder="Email"
        aria-label="Email"
        aria-describedby="email-addon"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
    </InputGroup>
  )
}
