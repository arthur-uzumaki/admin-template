import Link from "next/link";
import { useAuth } from "../../data/hook/useAuth";

interface AvatarUsuarioProps{
  className?: string
}

export function AvatarUsuario(props: AvatarUsuarioProps){
  const {usuario} = useAuth()
  return (
      <Link href='/perfil' legacyBehavior>

        <img className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`} src={usuario?.imagemUrl ?? '/image/avatar.svg'} alt="Avatar do Usuário"  />
      </Link>
  )

}