
interface PropsType{
  name:string;
  type:string;
  placeholder:string;
  register?:any;
}
function TextField({name,type,placeholder,register}:PropsType) {
  return (
    <input
        {...register(name)}
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
      />
  )
}

export default TextField