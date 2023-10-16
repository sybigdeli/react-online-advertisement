const Button = ({children}) => {
  return (
    <button className="w-[150px] h-[42px] rounded-[20px] bg-primary-100 text-white text-[16px] font-semibold leading-4">{children}</button>
  )
}

export default Button