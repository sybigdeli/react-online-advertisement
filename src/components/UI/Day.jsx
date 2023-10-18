function Day({day , date}) {
  return (
    <div className="w-[42px] h-[51px] py-[5px] bg-neutral-50 rounded-[7px] border border-zinc-300 flex-col justify-start items-start inline-flex">
        <p className="self-stretch grow shrink basis-0 text-center text-black text-base font-semibold leading-none tracking-tight">{day}</p>
        <span className="self-stretch grow shrink basis-0 text-center text-black text-base font-semibold leading-none tracking-tight">{date}</span>
    </div>
  )
}

export default Day