import { Avatar, Button, Grid, Typography } from "@mui/material";
import Image from "@/app/imagens/galactic-night-sky-astronomy-science-combined-generative-ai.jpg";





const Login = () =>{
  return(
    <div className="w-screen h-screen p-5 bg-gray-900">
      

      <div className="mt-5">
        <Typography className="text-3xl font-bold text-center">Sistema de Login</Typography>
        
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Endereço de e-mail</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-blue-400" type="email" id="emailField"/>
        </div>


        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-blue-400" type="password" id="passowrdField"/>
        </div>
       
  <div className="my-6">
     <Button className="w-full p-2 rounded-md text-lg font-bold border-none  text-white bg-yellow-500 ">Entrar</Button> 
  </div>
  


        <div className="text-center text-gray-400 ">
          fez seu cadastro? <a className="text-yellow-500 font-bold" href=""> Faça seu cadastro agora</a>
        </div>
      </div>
      
    </div>
  )
}

export default Login;