import { useState } from "react";
function Condition() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(event) {
    event.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu e-mail..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={enviarEmail}>Enviar E-mail</button>
        {userEmail && (
          <div>
            <p>O e-mail do usuario é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condition;
