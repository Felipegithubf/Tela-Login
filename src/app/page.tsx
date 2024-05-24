'use client';



import { useState } from 'react';
import { Button, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Simulação de autenticação básica
    if (email === 'usuario@example.com' && password === 'senha123') {
      // Se as credenciais estiverem corretas, redirecione o usuário para a página inicial (ou faça o que quiser)
      window.location.href = '/';
    } else {
      // Se as credenciais estiverem incorretas, exiba uma mensagem de erro
      setError('Por favor, tente novamente.');
    }
  };

  return (
    <div className="w-screen h-screen p-24 flex justify-center items-center opacity-100" style={{ backgroundColor: "#2A8EFF" }}>
      <header className="w-full h-7 flex justify-center items-center md:mx-12 lg:mx-24 relative">
        <div className="max-w-lp  p-80 w-full border-white-600 rounded-md border-4 bg-gray-200 bg-opacity-90"></div>
      </header>
      <div className="max-w-md p-20 w-full border border-white-600 rounded-md  bg-blue-5800 bg-opacity-90">
        <Typography className="text-3xl font-bold text-center text-white mb-6">VHA Login</Typography>
        <form onSubmit={handleSubmit}>
          <div className="my-6">
            <label className="block text-lg mb-2 text-white" htmlFor="emailField">Endereço de e-mail</label>
            <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="email" id="emailField" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="my-6">
            <label className="block text-lg mb-2 text-white" htmlFor="passwordField">Senha</label>
            <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="password" id="passwordField" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="my-6">
            <Button type="submit" className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-500">Entrar</Button> 
          </div>
        </form>
        <div className="text-center text-blue-900">
          Fez seu cadastro? <a className="text-yellow-500 font-bold" href=""> Faça seu cadastro agora</a>
        </div>
      </div>
    </div>
  );
};

export default Login;