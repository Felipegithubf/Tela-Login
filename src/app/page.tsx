'use client';

import { useState, useEffect } from 'react';
import Imagem1 from '@/components/Imagem1';
import Image8 from '@/components/Image';
import { Button, Typography } from "@mui/material";

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
    <div className="w-screen h-screen flex flex-col justify-center items-center sm:flex-row" style={{ backgroundColor: "#212E3E" }}>
      <Imagem1 />
      <div className="w-full sm:w-3/4 md:w-1/3 lg:w-1/3 p-8 m-4 flex flex-col">
        <Typography className="text-3xl font-bold text-center text-white mb-2">VHA Login</Typography>
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
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
          <div className="my-6 flex-grow">
            <Button type="submit" className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-600">Entrar</Button>
          </div>
        </form>
        <div className="text-center text-white">
          <a href="#">Recuperar senha</a>
        </div>
        <div className="text-center text-amber-400 p-4">
          <a href='/cadastro'>Já se cadastrou? Cadastre-se aqui</a>
        </div>
      </div>
    </div>
  );
};

export default Login;