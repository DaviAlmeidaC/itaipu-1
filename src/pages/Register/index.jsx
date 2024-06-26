import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.png";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./styles.css";

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuário cadastrado com sucesso!');
      setError(null); // Reset error after successful signup
    } catch (error) {
      setError(error.message || 'An error occurred during signup.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Usuário deslogado com sucesso!');
      setError(null); // Reset error after successful sign out
    } catch (error) {
      setError(error.message || 'An error occurred during sign out.');
    }
  };
  
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} className="img-logo" />
        <span>Por favor digite suas informações para realização do cadastro</span>
      </header>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="inputContainer">
          <label htmlFor="password">Nome</label>
          <input
            type="text"
            
           
            placeholder="Davi Almeida"
           
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="itaipu@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">CPF</label>
          <input
            type="number"
            
            placeholder="xxx/xxx/xxx-xx"
         
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} className="button" type="submit">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>

       
      </form>


      <button onClick={handleSignOut}>Sair</button>
    </div>
  );
}
