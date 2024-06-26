import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/Logo.png";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State para armazenar erros

  const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
      navigate("/acao"); // Redireciona após o login bem sucedido
    } catch (error) {
      setError(error.message); // Define o erro para exibir na UI
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="ITAIPO" className="img-logo" />
        <span>Por favor, digite suas informações de login</span>
      </header>

      <form onSubmit={handleSignIn}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="ITAIPO@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="button" type="submit">
          Entrar <img src={arrowImg} alt="->" />
        </button>

        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
