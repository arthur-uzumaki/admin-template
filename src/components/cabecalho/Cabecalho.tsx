import { useAppData } from "../../data/hook/useAppData";
import { BotaoAlternarTema } from "../botaoAlternarTema/BotaoAlternarTema";
import { Titulo } from "../titulo/Titulo";


interface CabecalhoProps{
  titulo: string;
  subtitulo: string;
}

export function Cabecalho({titulo , subtitulo}:CabecalhoProps){
  const {tema , alternarTema} = useAppData()
  return(
    <div className="flex ">
      <Titulo titulo={titulo} subtitulo={subtitulo}/>

      <div className="flex flex-grow justify-end">
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      </div>
    </div>
  )
}