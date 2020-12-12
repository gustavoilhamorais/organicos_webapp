import React from 'react'
import Context from '../loginContext';

export default function SaveLoginData() {
  const loginDataId = process.env.REACT_APP_LOCALSTORAGE_LOGIN_DATA_KEY;
  const { 
    saveLoginData, 
    email, 
    setEmail, 
    setSaveLoginData, 
    setPassword,
    password
  } = React.useContext(Context);

  function handleSaveLoginData({ target: { checked } }) {
    setSaveLoginData(() => checked);
  }

  React.useEffect(() => {
    const userSavedLoginData = localStorage.getItem(loginDataId);
    if (userSavedLoginData) {
      const previouslySavedLoginData = JSON.parse(userSavedLoginData);
      setSaveLoginData(() => true);
      setEmail(() => previouslySavedLoginData.email);
      setPassword(() => previouslySavedLoginData.password);
    }
  }, []);

  React.useEffect(() => {
    if (saveLoginData) {
      const data = JSON.stringify({ email, password });
      localStorage.setItem(loginDataId, data);
    } else {
      localStorage.removeItem(loginDataId);
    }
  }, [email, loginDataId, password, saveLoginData]);

  return (
    <>
      <input
        id="save-login-data-checkbox"
        name="save-login-data-checkbox"
        type="checkbox"
        checked={saveLoginData}
        onChange={handleSaveLoginData}
      />
      <label htmlFor="save-login-data-checkbox" className="ml-1 text-muted">
        Salvar dados de login
      </label>
    </>
  )
}
