
'use client';


import { useState } from 'react';
import { Button, Typography } from "@mui/material";



    




interface Props {
  setIsRegistering: (value: boolean) => void; // Definindo a tipagem para setIsRegistering
}


const  Cadastro: React.FC<Props> = ({ setIsRegistering }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar se os campos estão preenchidos corretamente
    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Validar se as senhas coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Lógica de cadastro
    // Aqui você pode adicionar sua lógica de cadastro

    // Após o cadastro, você pode fazer alguma ação, como redirecionar para a tela de login
    setIsRegistering(false);
  };

  return (
    <div className="max-w-md p-20 w-full border border-white-600 rounded-md  bg-blue-5800 bg-opacity-90">
      <Typography className="text-3xl font-bold text-center text-white mb-6">Cadastro</Typography>
      <form onSubmit={handleSubmit}>
        <div className="my-6">
          <label className="block text-lg mb-2 text-white" htmlFor="emailField">Email</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="email" id="emailField" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
        </div>
        <div className="my-6">
          <label className="block text-lg mb-2 text-white" htmlFor="passwordField">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="password" id="passwordField" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Insira sua senha" />
        </div>
        <div className="my-6">
          <label className="block text-lg mb-2 text-white" htmlFor="confirmPasswordField">Confirmar Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="password" id="confirmPasswordField" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme sua senha" />
        </div>
        {error && <p className="text-black-300">{error}</p>}
        <div className="my-6 flex justify-between">
          <Button type="submit" className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-600">Cadastrar</Button>
          {/* Botão para voltar para a tela de login */}
          <div className="ml-4">
            <Button onClick={() => setIsRegistering(false)} className="text-yellow-500 font-bold">Voltar para o Login</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Cadastro;
