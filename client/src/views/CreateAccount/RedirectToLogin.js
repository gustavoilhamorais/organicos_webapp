import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Context from './accountCreationContext';

function RedirectToLogin() {
  const { redirectToLoding } = useContext(Context);
  return (
    redirectToLoding
      ? <Redirect to="/entrar" />
      : <></>
  )
}

RedirectToLogin.propTypes = {
  redirectToLoding: PropTypes.bool
}

export default RedirectToLogin

