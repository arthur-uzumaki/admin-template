
interface AuthInputProps{
  label: string
  valor: string
  obrigatorio?: boolean
  tipo?: 'text'| 'password' | 'email'
  valorModou: (novoValor: string ) => void
}

export function AuthInput({label , valor , valorModou, tipo , obrigatorio}:AuthInputProps){

  return (
    <div className="flex flex-col mt-8">
        <label className="text-gray-300">{label}</label>
        <input 
        className="px-4  py-3 text-xl rounded-lg bg-zinc-400 mt-2 focus:outline-none border  focus:border-violet-600 focus:bg-white  "
        type={tipo ?? "text"}  
        value={valor} 
        onChange={e =>  valorModou?.(e.target.value)}
        required={obrigatorio}
        
        />
    </div>
  )
}