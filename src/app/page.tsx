'use client';

import { useState, useEffect } from 'react';
import { Button, Typography } from "@mui/material";
import Image8 from '@/components/Image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const isUserLoggedIn = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  };

  const markUserAsLoggedIn = () => {
    localStorage.setItem('isLoggedIn', 'true');
  };

  const markUserAsLoggedOut = () => {
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    if (isUserLoggedIn()) {
      // Faça aqui qualquer ação necessária quando o usuário estiver conectado
    }
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Simulação de autenticação básica
    // Se o usuário marcou a opção "Mantenha conectado", marca o usuário como conectado
    if (rememberMe) {
      markUserAsLoggedIn();
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: "#212E3E" }}>
      <div className=" w-3/12 p-20 ">
        <Typography className="text-3xl font-bold text-center text-white mb-6">VHA Login</Typography>
        <form onSubmit={handleSubmit}>
          <Image8 />
          <div className="my-6">
            <label className="block text-lg mb-2 text-white" htmlFor="emailField"> Email </label>
            <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="email" id="emailField" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
          </div>
          <div className="my-6">
            <label className="block text-lg mb-2 text-white" htmlFor="passwordField">Senha</label>
            <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="password" id="passwordField" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Insira sua senha" />
          </div>
          <div className="flex items-center my-4 text-white">
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="mr-2" />
            <label htmlFor="rememberMe">Mantenha conectado</label>
          </div>
          {error && <p className="text-black-300">{error}</p>}
          <div className="my-6">
            <Button type="submit" className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-600">Entrar</Button>
          </div>
        </form>
        <div className="text-center text-white">
          <a href="#">Recuperar senha</a>
        </div>
      </div>
    </div>
  );
};

export default Login;