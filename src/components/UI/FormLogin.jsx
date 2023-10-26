const FormLogin = ({inputName , inputType , label , placeHolder}) => {
  return (
    <div className="w-full flex flex-col gap-2 border-neutral-200 items-start">
      <label htmlFor={inputName} className="text-slate-500 text-sm font-normal font-['Estedad-VF']">{label}</label>
      <input type={inputType} name={inputName} placeholder={placeHolder} className="w-full rounded-3xl border p-2 placeholder:text-zinc-200 text-sm font-normal transition-all" />
    </div>
  );
};

export default FormLogin;
