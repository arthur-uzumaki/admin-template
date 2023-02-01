import Image from "next/image";
import { FormEvent, useState } from "react";
import google from '../assets/google.svg';
import warn from '../assets/warn.svg';
import { AuthInput } from "../components/auth/AuthInput";

export default function Autenticacao() {

  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function submeter(e: FormEvent) {
    if (modo === 'login') {
      exbirErro('Ocorreu um erro no login!')
    } else {
     exbirErro('Ocorreu um erro no cadastro!')
      console.log('cadastrar')
    }
  }

  function exbirErro(msg:string , tempoEsgotado = 5){
      setErro(msg)
      setInterval(() => setErro('') , tempoEsgotado * 1000) 
  }
  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="hidden  md:block md:w-1/2  ">
        <img src="https://i0.wp.com/techwek.com/wp-content/uploads/2021/10/top-papel-de-parede-masculino.jpg?fit=564%2C1002&ssl=1" alt="" className="h-screen w-full object-cover" />
      </div>

      <div className="m-10  w-full md:w-1/2 ">
        <h1 className="text-3xl font-bold mb-5 text-white">
          {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>

        {erro ? (
          <div className="flex items-center  bg-red-400 text-white px-5 py-3 my-2 border border-red-700 rounded-lg">
            <Image className="h-10 w-10" src={warn} alt='' />
            <span className="ml-3 text-xl">{erro} </span>
          </div>

        ) : false}

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorModou={setEmail}
          obrigatorio
        />

        <AuthInput
          label="Senha"
          valor={senha}
          valorModou={setSenha}
          tipo='password'
          obrigatorio={true}

        />

        <button type="submit" onClick={submeter} className='text-xl w-full bg-violet-500 hover:bg-violet-400 text-white rounded-lg px-4 py-3 mt-6'>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-zinc-300 w-full" />

        <button type="submit" onClick={submeter} className='flex items-center justify-center  w-full bg-violet-800 hover:bg-red-400 text-white rounded-lg px-4 py-3 '>
          <Image src={google} alt='' /> <span className="m-3 text-xl">Entrar com Google</span>
        </button>

        {modo === 'login' ? (

          <p className="mt-8 text-white">
            Novo por aqui?
            <a onClick={() => setModo('cadastro')} className='text-zinc-500 hover:text-zinc-700 font-semibold cursor-pointer'> Crie uma conta Gratuitamente </a>


          </p>

        ) : (

          <p className="mt-8  text-white">
            Já faz parte da nossa comunidade?
            <a onClick={() => setModo('login')} className='text-zinc-500 hover:text-zinc-700 font-semibold cursor-pointer'> Entre com a sua Credenciais </a>


          </p>
        )}
      </div>
    </div>

  )
}