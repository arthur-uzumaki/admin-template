import Image from 'next/image';
import { MenuItem } from "../menuItem/MenuItem";

import ajuste from '../../assets/adjustmentsVertical.svg';
import bell from '../../assets/bell.svg';
import home from '../../assets/Home.svg';
import logo from '../../assets/logo.jpg';
import logout from '../../assets/logout.svg';


export function MenuLateral() {
  return (
    <aside className='flex flex-col text-zinc-700 bg-zinc-200 dark:bg-zinc-900  '>
      <div className='flex flex-col  rounded-sm items-center justify-center  h-20 w-20 bg-gradient-to-r from-green-500  to-yellow-400'>
          <Image className='rounded-lg' src={logo} alt='Logo do Brasil'/>
      </div>
      <ul className='flex-grow' >

        <MenuItem url="/" texto="Início" icone={<Image className='text-violet-600' src={home} alt='' />} />
        <MenuItem url="/ajuste" texto="Ajuste" icone={<Image src={ajuste} alt='' />} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={<Image src={bell} alt='' />} />

      </ul>

      <ul>
      <MenuItem className='text-red-600  hover:bg-red-400 hover:text-white ' onClick={() => console.log('saiu')} texto="Sair" icone={<Image  src={logout} alt=''/>} />

      </ul>
    </aside>
  )
}