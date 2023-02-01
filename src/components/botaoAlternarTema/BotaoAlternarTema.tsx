
import Image from 'next/image'
import lua from '../../assets/lua.svg'
import sol from '../../assets/sol.svg'

interface BotaoAlternarTemaProps{
  tema?: string
  alternarTema?: () => void
}
export function BotaoAlternarTema({tema , alternarTema}: BotaoAlternarTemaProps){

  return tema === 'dark' ? (
      <div onClick={alternarTema} className='hidden sm:flex items-center  cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full'>
          <div className='flex items-center justify-center bg-white w-6 h-6 rounded-full'>
              <Image className='w-4 h-4' src={sol} alt=''/>
          </div>

          <div className='hidden lg:flex items-center ml-4 text-white'>
            <span className='text-sm'>Claro</span>

          </div>
      </div>
  ) : (
   
   <div onClick={alternarTema} className='hidden sm:flex items-center  justify-end cursor-pointer bg-gradient-to-r from-zinc-500 to-zinc-900 w-14 lg:w-24 h-8 p-1 rounded-full'>
   
    <div className='hidden lg:flex items-center mr-2 text-gray-300'>
      <span className='text-sm'>Escuro</span>

    </div>
   
    <div className='flex items-center justify-center bg-black w-6 h-6 rounded-full'>
        <Image className='w-4 h-4' src={lua} alt=''/>
    </div>

</div>
  )
}