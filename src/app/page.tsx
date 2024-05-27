'use client';

import { useState, useEffect } from 'react'; // Importa o hook useState do React para gerenciar estados em componentes funcionais.
import { Button, Typography } from "@mui/material"; // Importa os componentes Button e Typography da biblioteca Material-UI.
import Image from 'next/image'; // Importa o componente Image do Next.js para otimização de imagens.

const Login = () => {
  // Estados do componente
  const [email, setEmail] = useState(''); // Estado para armazenar o valor do campo de email.
  const [password, setPassword] = useState(''); // Estado para armazenar o valor do campo de senha.
  const [rememberMe, setRememberMe] = useState(false); // Estado para armazenar se o usuário deseja ser lembrado.
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro.
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar se o usuário está no modo de registro.

  // Função para verificar se o usuário está conectado
  const isUserLoggedIn = () => {
    // Verifica se há um item no armazenamento local indicando que o usuário está conectado
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // Retorna true se o usuário estiver conectado ou false caso contrário
    return isLoggedIn === 'true';
  };

  // Função para marcar o usuário como conectado
  const markUserAsLoggedIn = () => {
    // Define um item no armazenamento local indicando que o usuário está conectado
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Função para marcar o usuário como desconectado
  const markUserAsLoggedOut = () => {
    // Remove o item do armazenamento local indicando que o usuário está conectado
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    // Verifica se o usuário está conectado ao carregar o componente
    if (isUserLoggedIn()) {
      // Faça aqui qualquer ação necessária quando o usuário estiver conectado
    }
  }, []); // Executa apenas uma vez ao carregar o componente

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (isRegistering) {
      // Lógica de cadastro
      // Após o cadastro, marca o usuário como conectado
      markUserAsLoggedIn();
    } else {
      // Simulação de autenticação básica
      // Se o usuário marcou a opção "Mantenha conectado", marca o usuário como conectado
      if (rememberMe) {
        markUserAsLoggedIn();
      }
    }
  };

  // Renderização do componente
  return (
    <div className="w-screen h-screen p-24 flex justify-center items-center opacity-100" style={{ backgroundColor: "#2A8EFF" }}>
      
      {/* Cabeçalho */}
      <header className="w-full h-7 flex justify-center items-center md:mx-12 lg:mx-24 relative">
        <div className="max-w-lp  p-80 w-full border-white-600 rounded-md border-4 bg-gray-200 bg-opacity-90">
          <Image src="/galactic-night-sky-astronomy-science-combined-generative-ai.jpg" alt="Céu noturno galáctico" width={800} height={1500} />
        </div>
      </header>
      {/* Formulário de login ou registro */}
      <div className="max-w-md p-20 w-full border border-white-600 rounded-md  bg-blue-5800 bg-opacity-90">
        <Typography className="text-3xl font-bold text-center text-white mb-6">VHA {isRegistering ? 'Cadastro' : 'Login'}</Typography>
        <form onSubmit={handleSubmit}>
          {/* Campo de nome de usuário, visível apenas durante o registro */}
          {isRegistering && (
            <div className="my-6">
              <label className="block text-lg mb-2 text-white" htmlFor="usernameField"></label>
            </div>
          )}
          {/* Campo de email */}
          <div className="my-6">
            <label className="block text-lg mb-2 text-white" htmlFor="emailField"> Email </label>
            <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="email" id="emailField" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
          </div>

          {/* Campo de senha */}
          <div className="my-6">
            <label className="block text-lg mb-2 text-white" htmlFor="passwordField">Senha</label>
            <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="password" id="passwordField" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Insira sua senha" />
          </div>
          {/* Checkbox para lembrar de mim */}
          <div className="flex items-center my-4 text-white">
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="mr-2" />
            <label htmlFor="rememberMe">Mantenha conectado</label>
          </div>
          {/* Exibe mensagens de erro */}
          {error && <p className="text-black-300">{error}</p>}
          {/* Botão de envio */}
          <div className="my-6 flex justify-between">
            <Button type="submit" className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-600">{isRegistering ? 'Cadastrar' : 'Entrar'}</Button>
            {/* Link para alternar entre tela de registro e login */}
            <div className="ml-4">
              <a className="text-yellow-500 font-bold" href="#" onClick={() => setIsRegistering(true)}>Cadastre-se grátis</a>
            </div>
          </div>
        </form>
        {/* Link para recuperar senha ou alternar para tela de login */}
        <div className="text-center text-blue-900">
          {isRegistering ? (
            <>
              Já tem uma conta? <a className="text-yellow-500 font-bold" href="#" onClick={() => setIsRegistering(false)}>Faça login agora</a>
            </>
          ) : (
            <>
              <a href="#">Recuperar senha</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;