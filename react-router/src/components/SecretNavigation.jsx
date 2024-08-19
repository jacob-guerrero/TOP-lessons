import { useState } from "react";
import { Navigate } from "react-router-dom";

const SecretNavigation = () => {
  const [secret, setSecret] = useState(true);

  const handleSecretClick = () => {
    setSecret(false);
  };

  return (
    <>
      <h3>The Secret Page</h3>
      <p>Do not show it anyone else!</p>
      <button onClick={handleSecretClick}>I want to Share the Secret</button>
      {!secret && <Navigate to="/" replace={true}></Navigate>}
    </>
  );
};

export default SecretNavigation;
