import { Button, Typography } from "@mui/material";

const Login = () => {
  return (
    
    <div className="w-screen h-screen p-24 flex justify-center items-center opacity-100" style={{ backgroundColor: "#2A8EFF" }}>
      <header className="w-screen h-screen flex border border-white  ">
        
      </header>
      <div className="max-w-md p-20 w-full border border-white-600 rounded-md  bg-blue-700 bg-opacity-90">
        <Typography className="text-3xl font-bold text-center text-white mb-6">Sistema de Login</Typography>
        <div className="my-6">
          <label className="block text-lg mb-2 text-white" htmlFor="emailField">Endereço de e-mail</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="email" id="emailField"/>
        </div>
        <div className="my-6">
          <label className="block text-lg mb-2 text-white" htmlFor="passwordField">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 bg-opacity-70 border border-gray-600 outline-blue-400 text-white" type="password" id="passwordField"/>
        </div>
        <div className="my-6">
          <Button className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-500">Entrar</Button> 
        </div>
        <div className="text-center text-gray-400">
          fez seu cadastro? <a className="text-yellow-500 font-bold" href=""> Faça seu cadastro agora</a>
        </div>
      </div>
    </div>
  );
};

export default Login;