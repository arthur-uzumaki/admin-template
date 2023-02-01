
interface TituloProps{
  titulo: string
  subtitulo: string
}

export function Titulo({titulo , subtitulo}:TituloProps){
  return(
    <div>
      <h1 className="font-black text-3xl text-gray-900 dark:text-white">{titulo}</h1>
      <h2 className="font-light text-s text-gray-900 dark:text-gray-400">{subtitulo}</h2>
    </div>
  )
}